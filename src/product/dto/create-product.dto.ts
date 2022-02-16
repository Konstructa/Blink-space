import { IsString, IsNotEmpty, IsInt } from 'class-validator';

export class CreateProductDto {
  @IsString({ message: 'O nome precisa ser uma string' })
  @IsNotEmpty()
  name: string;

  @IsString({ message: 'O nome precisa ser uma string' })
  @IsNotEmpty()
  description: string;

  @IsInt({ message: 'O valor é dado em numeros inteiros!' })
  @IsNotEmpty()
  quantity: number;
}
