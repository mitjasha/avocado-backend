import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthCredentialsDto } from "./dto/auth-credentials.dto";
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
}
