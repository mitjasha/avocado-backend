import { IsEnum, IsNotEmpty } from "class-validator";
import { EEvent } from "../event.enum";

export class CreateEventDto {
  @IsNotEmpty()
  @IsEnum(EEvent)
  event: EEvent;

  startTime: Date;

  description: string;
}
