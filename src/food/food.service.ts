import { Injectable } from '@nestjs/common'

@Injectable()
export class FoodService {

  getAllFoods(): string {
    return '馒头，米饭，烤鸡，烤鸭，火锅，涮菜';
  }

  getFoodInfo(foodName: string): string {
    return `${foodName}是一种很健康的食物`;
  }

}