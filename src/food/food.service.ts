import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { DrinkService } from '../drink/drink.service';

@Injectable()
export class FoodService {

  constructor(
    @Inject(forwardRef(() => DrinkService))
    private drinkService: DrinkService
  ) {}

  getAllFoods(): string {
    return '馒头，米饭，烤鸡，烤鸭，火锅，涮菜';
  }

  getFoodInfo(foodName: string): string {
    return `${foodName}是一种很健康的食物`;
  }

  getCombinedDrink(foodName: string): string {
    const combinedDrink = this.drinkService.getDrinkForFood(foodName);
    return `You should drink ${combinedDrink} when having ${foodName}!`;
  }

  getFoodForDrink(drinkName: string): string {
    if (drinkName === 'water') {
      return 'Salad';
    }
    return 'Humburger';
  }

}