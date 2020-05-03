import { Factory, Seeder } from 'typeorm-seeding';
import { Clients } from '../../clients/clients.entity';

export class CreateClients implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Clients)().createMany(10);
  }
}
