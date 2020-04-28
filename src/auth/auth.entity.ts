import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  BeforeInsert,
} from 'typeorm';
import { Users } from '../users/users.entity';
import { randomBytes } from 'crypto';

@Entity()
export class Auth {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Users)
  user: Users;

  @Column()
  refreshToken: string;

  @Column({
    type: 'timestamp',
    default: () => "NOW() + INTERVAL '60 DAY'",
    transformer: {
      to(data) {
        return data;
      },
      from(data) {
        return Math.floor(new Date(data).getTime() / 1000);
      },
    },
  })
  refreshTokenExpiration: Date;

  @BeforeInsert()
  async generateRefreshToken() {
    this.refreshToken = randomBytes(64).toString('hex');
  }
}
