import { Module } from '@nestjs/common';
import { IpGeoLocationController } from './app.controller';
import { IpGeoLocationService } from './app.service';

@Module({
  imports: [],
  controllers: [IpGeoLocationController],
  providers: [IpGeoLocationService],
})
export class AppModule {}
