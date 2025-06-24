import { Controller, Get, Param } from '@nestjs/common';
import { RiderService } from './rider.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller('rider')
export class RiderController {
  constructor(private readonly riderService: RiderService) {}

  // @Get()
  @MessagePattern({cmd: 'get-rider'})
  async getRiderById(data: any) {
    return Promise.resolve({
      id: data.id,
      firstName: "jane",
      lastName: "doe",
      email: "janedoe@mail.com"
    })
  }
}
