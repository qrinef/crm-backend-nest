import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Statuses {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
