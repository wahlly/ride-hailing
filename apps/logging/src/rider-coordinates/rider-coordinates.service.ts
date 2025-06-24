import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RiderCoordinate } from './schemas/rider-coordinates.schema';
import { Model } from 'mongoose';
import { CreateCoodinatesDTO } from './dto/create-coordinates.dto';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class RiderCoordinatesService {
      constructor(
            @InjectModel(RiderCoordinate.name)
            private readonly riderCoordinateModel: Model<RiderCoordinate>,
            @Inject("RIDER_SERVICE")
            private client: ClientProxy
      ) {}

      async saveRiderCoordinates(createCoordinatesDTO: CreateCoodinatesDTO) {
            return await this.riderCoordinateModel.create(createCoordinatesDTO)
      }

      async getRiderCoordinates(riderId) {
            const riderCoordinates =  await this.riderCoordinateModel.find({rider: riderId})
            const pattern = {cmd: 'get-rider'}
            const payload = {id: riderId}
            const rider = await firstValueFrom(this.client.send(pattern, payload))

            return {riderCoordinates, rider}
      }
}
