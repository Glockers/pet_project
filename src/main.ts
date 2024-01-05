import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const t = 1;
  console.log(t);
  await app.listen(3000);
}
bootstrap();
