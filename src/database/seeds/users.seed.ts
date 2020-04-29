import { Factory, Seeder } from 'typeorm-seeding';
import { Users } from '../../users/users.entity';

export class CreateUsers implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Users)().create();
    // await factory(Users)().create({ email: 'admin@example.com', password: 'password' });
    // await factory(Users)().createMany(14);
  }
}
