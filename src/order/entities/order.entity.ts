import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { Customer } from '../../customer/entities/customer.entity';
import { Product } from '../../product/entities/product.entity';

@Entity('order')
class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  products_quantity: number;

  @ManyToOne(() => Product, { eager: true })
  @JoinColumn()
  product: Product;

  @ManyToOne(() => Customer, { onDelete: 'CASCADE', eager: true })
  @JoinColumn()
  customer: Customer;

  @CreateDateColumn()
  created_at: Date;
}

export { Order };
