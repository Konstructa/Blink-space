import { IsInt } from 'class-validator';

export class CreateOrderDto {
  @IsInt({ message: 'A quantidade é em números inteiros!' })
  products_quantity: number;

  @IsInt({ message: 'A identificação é em números inteiros!' })
  product: number;

  @IsInt({ message: 'A identificação é em números inteiros!' })
  customer: number;
}
