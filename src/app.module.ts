import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerController } from './customer/customer.controller';
import { ProductModule } from './product/product.module';
import { CustomerModule } from './customer/customer.module';
import { OrderController } from './order/order.controller';
import { OrderService } from './order/order.service';
import { OrderModule } from './order/order.module';

@Module({
  imports: [ProductModule, CustomerModule, OrderModule],
  controllers: [AppController, CustomerController, OrderController],
  providers: [AppService, OrderService],
})
export class AppModule {}
