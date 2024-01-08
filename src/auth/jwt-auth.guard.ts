import { JwtService } from '@nestjs/jwt'
import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { Observable } from 'rxjs'
import { ROLES_KEY } from './roles-auth.decorator'

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService,
    private reflector: Reflector) {}
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest()
    try {
      const requiredRoles = this.reflector.getAllAndOverride(ROLES_KEY, [context.getHandler(), context.getClass()])
      if(!requiredRoles){
        return true
      }
      const authHeader = req.headers.authorization
      const bearer = authHeader.split(' ')[0]
      const token = authHeader.split(' ')[1]
      if (bearer !== 'Bearer' || !token) {
        throw new UnauthorizedException({
          massage: 'Пользователь не авторизован',
        })
      }
      const user = this.jwtService.verify(token)
      req.user = user
      return user.roles.some(role => requiredRoles.includes(role.value))
    } catch (e) {
      console.log(e)
      throw new HttpException('Нет доступа', HttpStatus.FORBIDDEN)
    }
  }
}
