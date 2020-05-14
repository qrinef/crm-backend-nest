import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { Clients } from '../clients/clients.entity';
import { Statuses } from '../statuses/statuses.entity';
import { Stages } from '../stages/stages.entity';

@Entity()
export class Orders {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Clients, {
    onDelete: 'CASCADE',
  })
  client: Clients;

  @ManyToOne(type => Statuses)
  status: Statuses;

  @ManyToOne(type => Stages)
  stage: Stages;

  @Column()
  price: number;

  @CreateDateColumn()
  createdAt: Date;
}
