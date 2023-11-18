import { Module } from '@nestjs/common';
import { customerProviders } from '../customer/entities/customer.providers';
import { DatabaseModule } from '../database/database.module';
import { productProviders } from '../product/entities/product.providers';
import { orderProviders } from './entities/order.providers';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';

@Module({
  imports: [DatabaseModule],
  controllers: [OrderController],
  providers: [
    ...orderProviders,
    ...productProviders,
    ...customerProviders,
    OrderService,
  ],
})
export class OrderModule {}
