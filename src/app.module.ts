import { Module } from '@nestjs/common';
import { CustomerController } from './customer/customer.controller';
import { ProductModule } from './product/product.module';
import { CustomerModule } from './customer/customer.module';
import { OrderController } from './order/order.controller';
import { OrderService } from './order/order.service';
import { OrderModule } from './order/order.module';
import { CustomerService } from './customer/customer.service';
import { customerProviders } from './customer/entities/customer.providers';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule, ProductModule, CustomerModule, OrderModule],
  controllers: [CustomerController, OrderController],
  providers: [...customerProviders, CustomerService, OrderService],
})
export class AppModule {}
