import { Controller, Get, Param, Post } from '@nestjs/common';
import { FoodService } from './food.service';

@Controller('/food')
export class FoodController {

  constructor(private foodService: FoodService) {}

  @Get('/info/:foodName')
  getFoodInfo(@Param('foodName') foodName: string): string {
    return this.foodService.getFoodInfo(foodName);
  }

  // @Get('/getCombine/:foodName')
  // getFoodCombine(@Param() foodName: string): string {

  // }

}