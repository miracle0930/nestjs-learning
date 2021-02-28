import { Controller, Get, Post } from '@nestjs/common';
import { BarService } from './bar.service';
import { DrinkService } from '../drink/drink.service';
import { FoodService } from '../food/food.service';

@Controller('/bar')
export class BarController {
  constructor(
    private barService: BarService,
    private drinkService: DrinkService,
    private foodService: FoodService,
  ) {}

  @Get('/info')
  getBarInfo(): string {
    return this.barService.getBarInfo();
  }

  @Get('/foods')
  getAllFoods(): string {
    return this.foodService.getAllFoods();
  }

  @Get('/drinks')
  getAllDrinks(): string {
    return this.drinkService.getAllDrinks();
  }

  // @Get('/entertaiments')
  // getAllEntertainments(): string {

  // }

  @Post('/purchaseDishes')
  createDishOrder(dishes: string[]) {

  }

  @Post('/purchaseEntertainments')
  createEntertainmentOrder(entertainments: string) {

  }

}
