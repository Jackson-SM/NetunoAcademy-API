import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  config();
  app.use(cookieParser());
  cloudinary.config({
    cloud_name: `${process.env.API_CLOUDINARY_NAME}`,
    api_key: `${process.env.API_CLOUDINARY_API_KEY}`,
    api_secret: `${process.env.API_CLOUDINARY_API_SECRET}`,
  });

  app.enableCors({
    credentials: true,
  });

  await app.listen(3000);
}
bootstrap();
