import { ExpressRequest } from "../../types/expressReqest.interface";
import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from "@nestjs/common";

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<ExpressRequest>();
    console.log(request.user, request.method, request.path);

    if (request.user) {
      return true;
    }

    throw new HttpException("Not authorized", HttpStatus.UNAUTHORIZED);
  }
}
