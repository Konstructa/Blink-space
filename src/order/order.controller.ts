import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.create(createOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderService.remove(+id);
  }

  @Get('/customerByOrderID/:id')
  getCustomer(@Param('id') id: string) {
    return this.orderService.getCustomer(+id);
  }

  @Get('/productDetailsByOrderID/:id')
  getProduc(@Param('id') id: string) {
    return this.orderService.getProduct(+id);
  }
}
