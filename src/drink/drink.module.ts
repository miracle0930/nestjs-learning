import { Module } from '@nestjs/common';
import { DrinkController } from './drink.controller';
import { DrinkService } from './drink.service';
import { FoodService } from '../food/food.service';

@Module({
  imports: [],
  controllers: [DrinkController],
  providers: [DrinkService, FoodService],
  exports: [DrinkService],
})
export class DrinkModule {}