import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { Users } from '../../users/users.entity';

define(Users, (faker: typeof Faker) => {
  const users = new Users()

  users.email = faker.internet.exampleEmail()
  users.password = 'password'

  return users
});
