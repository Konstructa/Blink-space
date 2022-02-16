import { Module } from '@nestjs/common';
import { customerProviders } from 'src/customer/entities/customer.providers';
import { DatabaseModule } from 'src/database/database.module';
import { productProviders } from 'src/product/entities/product.providers';
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
