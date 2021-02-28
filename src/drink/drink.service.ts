import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { FoodService } from '../food/food.service';

@Injectable()
export class DrinkService {

  constructor(
    @Inject(forwardRef(() => FoodService))
    private foodService: FoodService
  ) {}

  getAllDrinks(): string {
    return '白酒，红酒，啤酒，矿泉水，苏打水，白开水';
  }

  getDrinkInfo(drinkName: string): string {
    return `${drinkName}是一种很健康的饮品`;
  }

  getCombinedFood(drinkName: string): string {
    const combinedFood = this.foodService.getFoodForDrink(drinkName);
    return `You should eat ${combinedFood} when having ${drinkName}`;
  }

  getDrinkForFood(foodName: string): string {
    if (foodName === 'humburger') {
      return 'Coke Zero';
    }
    return 'Beer';
  }

}