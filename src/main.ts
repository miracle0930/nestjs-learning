import { NestFactory } from '@nestjs/core';
import { BarModule } from './bar/bar.module';

async function bootstrap() {
  const app = await NestFactory.create(BarModule);
  await app.listen(3000);
  console.log('Your application has successfully running on port 3000!')
}

bootstrap();
