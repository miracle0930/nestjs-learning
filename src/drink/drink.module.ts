import { Module } from '@nestjs/common';
import { DrinkController } from './drink.controller';
import { DrinkService } from './drink.service';

@Module({
  imports: [],
  controllers: [DrinkController],
  providers: [DrinkService],
  exports: [DrinkService],
})
export class DrinkModule {}