import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeUpdate,
  BeforeInsert,
} from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity('Customer')
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
