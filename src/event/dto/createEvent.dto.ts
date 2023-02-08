import { IsEnum, IsNotEmpty } from "class-validator";
import { EEvent } from "../event.enum";

export class CreateEventDto {
  @IsNotEmpty()
  @IsEnum(EEvent)
  name: EEvent;

  startTime: Date;

  description: string;
}
