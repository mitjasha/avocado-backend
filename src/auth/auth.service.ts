import {
  ConflictException,
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { AuthCredentialsDto } from "./dto/auth-credentials.dto";
import { UserResponseInterface } from "./types/user.response";
import { UserEntity } from "./user.entity";
import { sign } from "jsonwebtoken";
import { compare } from "bcrypt";
import { LoginUserDto } from "./dto/loginUser.dto";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<UserEntity> {
    try {
      const newUser = new UserEntity();
      Object.assign(newUser, authCredentialsDto);
      return await this.usersRepository.save(newUser);
    } catch (error) {
      if (error.code === "23505") {
        // duplicate username
        throw new ConflictException("Username already exists");
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async login(loginDto: LoginUserDto): Promise<UserEntity> {
    const user = await this.usersRepository.find({
      where: { username: loginDto.username },
      select: ["id", "username", "password"],
    });

    if (!user) {
      throw new HttpException(
        "Credentials are not valid",
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    const isPasswordCorrect = await compare(
      loginDto.password,
      user[0].password,
    );

    if (!isPasswordCorrect) {
      throw new HttpException(
        "Credentials are not valid",
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    delete user[0].password;
    return user[0];
  }

  generateJwt(user: UserEntity): string {
    return sign(
      {
        id: user.id,
        username: user.username,
      },
      process.env.JWT_SECRET,
    );
  }

  buildUserResponse(user: UserEntity): UserResponseInterface {
    return {
      user: {
        ...user,
        token: this.generateJwt(user),
      },
    };
  }
}
