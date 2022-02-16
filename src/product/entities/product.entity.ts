import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Stock')
class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  quantity: number;
}

export { Product };
