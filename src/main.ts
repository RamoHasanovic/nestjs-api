import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  await app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });
}

bootstrap().catch(() => {
  // send to remote server or email or sms or slack ...
  console.error('Failed to start the server');
});
