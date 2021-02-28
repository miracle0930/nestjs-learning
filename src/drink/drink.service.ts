import { Injectable } from '@nestjs/common'

@Injectable()
export class DrinkService {

  getAllDrinks(): string {
    return '白酒，红酒，啤酒，矿泉水，苏打水，白开水';
  }

}