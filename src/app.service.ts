import { Injectable } from '@nestjs/common';

@Injectable()
export class IpGeoLocationService {
  getLocation(): string {
    return 'Ok';
  }
}
