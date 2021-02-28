import { Controller, Get, Param, Post } from '@nestjs/common';
import { DrinkService } from './drink.service';

@Controller('/drink')
export class DrinkController {

  constructor(private drinkService: DrinkService) {}

  @Get('/info/:drinkName')
  getDrinkInfo(@Param('drinkName') drinkName: string): string {
    return this.drinkService.getDrinkInfo(drinkName);
  }

  @Get('/getCombinedFood/:drinkName')
  getCombinedFood(@Param('drinkName') drinkName: string): string {
    return this.drinkService.getCombinedFood(drinkName);
  }

}