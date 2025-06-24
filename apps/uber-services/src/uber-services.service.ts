import { Injectable } from '@nestjs/common';

@Injectable()
export class UberServicesService {
  getHello(): string {
    return 'Hello World!';
  }
}
