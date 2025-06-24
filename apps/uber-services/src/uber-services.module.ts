import { Module } from '@nestjs/common';
import { UberServicesController } from './uber-services.controller';
import { UberServicesService } from './uber-services.service';

@Module({
  imports: [],
  controllers: [UberServicesController],
  providers: [UberServicesService],
})
export class UberServicesModule {}
