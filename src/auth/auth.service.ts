import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { AuthCredentialsDto } from "./dto/auth-credentials.dto";
import { UserResponseInterface } from "./types/user.response";
import { UserEntity } from "./user.entity";
import { sign } from "jsonwebtoken";

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
