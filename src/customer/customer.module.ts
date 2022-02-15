import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { customerProviders } from './entities/customer.providers';
import { DatabaseModule } from '../database/database.module';
import { CustomerController } from './customer.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [CustomerController],
  providers: [...customerProviders, CustomerService],
})
export class CustomerModule {}
