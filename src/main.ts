import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,  // 데코레이터가 없는 속성은 제거함
      forbidNonWhitelisted: true, // 화이트리스트에 존재하지 않는 데이터가 있을 시 HttpException. whitelist: true가 선행되어야 함
      transform: true,  // transform은 사용자의 값을 실제 타입으로 변환시켜줌 -> url은 전부 string이기 때문에 기존에는 id를 string으로 받아 int 타입으로 변환시켰음
    }));
  await app.listen(3000);
}
bootstrap();
