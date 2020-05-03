import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Orders } from '../orders/orders.entity';

@Entity()
export class Stages {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(
    type => Orders,
    orders => orders.stage,
  )
  orders: Orders[];
}
