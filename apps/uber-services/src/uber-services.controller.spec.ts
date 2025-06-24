import { Test, TestingModule } from '@nestjs/testing';
import { UberServicesController } from './uber-services.controller';
import { UberServicesService } from './uber-services.service';

describe('UberServicesController', () => {
  let uberServicesController: UberServicesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UberServicesController],
      providers: [UberServicesService],
    }).compile();

    uberServicesController = app.get<UberServicesController>(UberServicesController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(uberServicesController.getHello()).toBe('Hello World!');
    });
  });
});
