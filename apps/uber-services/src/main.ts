import { NestFactory } from '@nestjs/core';
import { UberServicesModule } from './uber-services.module';

async function bootstrap() {
  const app = await NestFactory.create(UberServicesModule);
  await app.listen(process.env.port ?? 6200);
}
bootstrap();
