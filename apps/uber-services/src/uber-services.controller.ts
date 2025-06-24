import { Controller, Get } from '@nestjs/common';
import { UberServicesService } from './uber-services.service';

@Controller()
export class UberServicesController {
  constructor(private readonly uberServicesService: UberServicesService) {}

  @Get()
  getHello(): string {
    return this.uberServicesService.getHello();
  }
}
