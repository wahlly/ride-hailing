import { IsNotEmpty, IsNumber, IsString } from "class-validator";


export class CreateCoodinatesDTO {
      @IsNumber()
      @IsNotEmpty()
      lat: number

      @IsNumber()
      @IsNotEmpty()
      long: number

      @IsString()
      @IsNotEmpty()
      rider: string
}