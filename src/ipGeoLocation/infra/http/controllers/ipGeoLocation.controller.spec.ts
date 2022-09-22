import { Test, TestingModule } from '@nestjs/testing';
import { IpGeoLocationService } from 'src/ipGeoLocation/services/ipGeoLocation.service';
import { IpGeoLocationController } from './ipGeoLocation.controller';

describe('AppController', () => {
  let appController: IpGeoLocationController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [IpGeoLocationController],
      providers: [IpGeoLocationService],
    }).compile();

    appController = app.get<IpGeoLocationController>(IpGeoLocationController);
  });

  describe('root', () => {
    it('should return "Ok"', () => {
      expect(appController.getHello()).toBe('Ok');
    });
  });
});
