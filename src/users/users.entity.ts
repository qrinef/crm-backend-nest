import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import { genSalt, hash } from 'bcryptjs';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column()
  password: string;

  @BeforeInsert()
  async hashPassword() {
    const salt = await genSalt(12);
    this.password = await hash(this.password, salt);
  }
}
