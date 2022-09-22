import { Controller, Get } from '@nestjs/common';
import { IpGeoLocationService } from './app.service';

@Controller()
export class IpGeoLocationController {
  constructor(private readonly appService: IpGeoLocationService) {}

  @Get()
  getHello(): string {
    return this.appService.getLocation();
  }
}
