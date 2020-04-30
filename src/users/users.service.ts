import { Injectable } from '@nestjs/common';
import { InjectRepository, InjectConnection } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { Repository, Connection } from 'typeorm';
import { compare } from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
    @InjectConnection() private connection: Connection,
  ) {}

  async login(email: string, password: string) {
    const user = await this.usersRepository.findOne({ email });

    if (!user) {
      return Promise.resolve(null);
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      return Promise.resolve(null);
    }

    return user;
  }

  async findUser(id: Users) {
    const user = await this.usersRepository.findOne(id);

    if (!user) {
      return Promise.resolve(null);
    }

    return user;
  }

  async findAll() {
    return await this.usersRepository.find({
      select: ['id', 'email', 'phone', 'name', 'surname'],
    });
  }
}
