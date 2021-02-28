import { Module } from '@nestjs/common';
import { FoodController } from './food.controller';
import { FoodService } from './food.service';
import { DrinkService } from '../drink/drink.service';

@Module({
  imports: [],
  controllers: [FoodController],
  providers: [FoodService, DrinkService],
  exports: [FoodService],
})
export class FoodModule {}