import { Injectable, CanActivate, ExecutionContext, HttpException } from '@nestjs/common';

@Injectable()
export class EntryGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const salary = request.headers.salary
    if (salary > 1000000) {
      return true;
    }
    throw new HttpException(`一个月才挣${salary}?! 穷鬼滚粗!`, 404);
  }
}