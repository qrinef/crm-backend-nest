import { Factory, Seeder } from 'typeorm-seeding';
import { Users } from '../../users/users.entity';

export default class CreateUsers implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Users)().createMany(3);
  }
}
