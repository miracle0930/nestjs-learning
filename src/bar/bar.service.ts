import { Injectable } from '@nestjs/common';

@Injectable()
export class BarService {


  getBarInfo(): string {
    return '我们酒吧创建于1999年，饱经风霜历史悠久，值得您信赖!';
  }


}