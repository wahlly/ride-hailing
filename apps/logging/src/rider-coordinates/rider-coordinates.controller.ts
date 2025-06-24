import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCoodinatesDTO } from './dto/create-coordinates.dto';
import { RiderCoordinatesService } from './rider-coordinates.service';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
      constructor(
            private riderCoordinateService: RiderCoordinatesService
      ) {}
      @Get(':riderId')
      async getRiderCoordinates(@Param() params: any) {
            return this.riderCoordinateService.getRiderCoordinates(params.riderId)
      }

      @Post()
      async saveRiderCoordinates(@Body() createCoordinatesDTO: CreateCoodinatesDTO) {
            return this.riderCoordinateService.saveRiderCoordinates(createCoordinatesDTO)
      }
}
