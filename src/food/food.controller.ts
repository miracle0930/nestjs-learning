import { Controller, Get, Param, Post } from '@nestjs/common';
import { FoodService } from './food.service';

@Controller('/food')
export class FoodController {

  constructor(private foodService: FoodService) {}

  @Get('/info/:foodName')
  getFoodInfo(@Param('foodName') foodName: string): string {
    return this.foodService.getFoodInfo(foodName);
  }

  @Get('/getCombinedDrink/:foodName')
  getCombinedDrink(@Param('foodName') foodName: string): string {
    return this.foodService.getCombinedDrink(foodName); 
  }

}