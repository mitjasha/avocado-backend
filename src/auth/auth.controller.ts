import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthCredentialsDto } from "./dto/auth-credentials.dto";
import { LoginUserDto } from "./dto/loginUser.dto";
import { UserResponseInterface } from "./types/user.response";

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("users/signup")
  async signUp(
    @Body() authCredentialsDto: AuthCredentialsDto,
  ): Promise<UserResponseInterface> {
    const user = await this.authService.signUp(authCredentialsDto);

    return this.authService.buildUserResponse(user);
  }

  @Post("users/login")
  async login(@Body() loginDto: LoginUserDto): Promise<UserResponseInterface> {
    const user = await this.authService.login(loginDto);
    return this.authService.buildUserResponse(user);
  }
}
