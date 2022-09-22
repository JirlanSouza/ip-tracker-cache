import { Controller, Get } from '@nestjs/common';
import { IpGeoLocationService } from 'src/ipGeoLocation/services/ipGeoLocation.service';

@Controller()
export class IpGeoLocationController {
  constructor(private readonly appService: IpGeoLocationService) {}

  @Get()
  getHello(): string {
    return this.appService.getLocation();
  }
}
