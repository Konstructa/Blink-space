import { ValidationError } from '@nestjs/common';

export interface ResultDto {
  status: boolean;
  mensage: string | Array<ValidationError>;
}
