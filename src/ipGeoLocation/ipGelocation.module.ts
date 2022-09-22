import { Module } from '@nestjs/common';
import { IpGeoLocationController } from './infra/http/controllers/ipGeoLocation.controller';
import { IpGeoLocationService } from './services/ipGeoLocation.service';

@Module({
  imports: [],
  controllers: [IpGeoLocationController],
  providers: [IpGeoLocationService],
})
export class IpGeoLocationModule {}
