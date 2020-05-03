import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { Clients } from '../../clients/clients.entity';

define(Clients, (faker: typeof Faker) => {
  const clients = new Clients();

  clients.email = faker.internet.exampleEmail().toLowerCase();
  clients.phone = faker.phone.phoneNumberFormat();
  clients.name = faker.name.firstName();
  clients.surname = faker.name.lastName();

  return clients;
});
