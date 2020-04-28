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

  async createUser() {
    let newUser = new Users();
    newUser.email = 'admin@example.com';
    newUser.password = 'password';

    return await this.usersRepository.save(newUser);
  }

  // async create(payload) {
  //   return await this.profilesRepository.save(payload);
  // }

  // find(refresh_token: string): Promise<Profiles> {
  //   return this.profilesRepository.findOne({ refresh_token });
  // }

  // async remove(res) {
  //   return await this.profilesRepository.remove(res);
  // }

  async findAll() {
    // await this.connection.transaction(async profiles => {
    //   await profiles.save({
    //     test: 'hello1'
    //   });
    //   await profiles.save({
    //     test: 'hello2'
    //   });
    // });
    // const queryRunner = this.connection.createQueryRunner();
    // await queryRunner.connect();
    // await queryRunner.startTransaction();
    // try {
    //   await queryRunner.manager.save(users[0]);
    //   await queryRunner.manager.save(users[1]);
    //
    //   await queryRunner.commitTransaction();
    // } catch (err) {
    //   // since we have errors lets rollback the changes we made
    //   await queryRunner.rollbackTransaction();
    // } finally {
    //   // you need to release a queryRunner which was manually instantiated
    //   await queryRunner.release();
    // }
    // await this.profilesRepository.save({
    //   name: 'hello',
    //   description: 'test'
    // });
    // return this.profilesRepository.find();
  }
}
