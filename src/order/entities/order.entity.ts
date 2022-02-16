import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { Customer } from 'src/customer/entities/customer.entity';
import { Product } from 'src/product/entities/product.entity';

@Entity('Order')
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
