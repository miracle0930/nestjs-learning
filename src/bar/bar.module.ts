import { Module } from '@nestjs/common';
import { BarController } from './bar.controller';
import { BarService } from './bar.service';
import { FoodModule } from '../food/food.module';
import { DrinkModule } from '../drink/drink.module';

@Module({
  imports: [FoodModule, DrinkModule],
  controllers: [BarController],
  providers: [BarService],
})
export class BarModule {}