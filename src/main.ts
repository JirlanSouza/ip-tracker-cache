import { NestFactory } from '@nestjs/core';
import { IpGeoLocationModule } from './ipGeoLocation/ipGelocation.module';

async function bootstrap() {
  const app = await NestFactory.create(IpGeoLocationModule);
  await app.listen(3000);
}
bootstrap();
