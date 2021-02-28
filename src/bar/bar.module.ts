import { Module } from '@nestjs/common';
import { BarController } from './bar.controller';
import { BarService } from './bar.service';
import { FoodModule } from '../food/food.module';
import { DrinkModule } from '../drink/drink.module';
import { EntryGuard } from '../guard/entry.guard'

@Module({
  imports: [FoodModule, DrinkModule],
  controllers: [BarController],
  providers: [BarService, EntryGuard],
})
export class BarModule {}