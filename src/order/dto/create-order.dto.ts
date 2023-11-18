import { IsInt } from 'class-validator';

export class CreateOrderDto {
  @IsInt()
  products_quantity: number;

  @IsInt()
  product: number;

  @IsInt()
  customer: number;
}
