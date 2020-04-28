import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { Users } from '../../users/users.entity';

define(Users, (faker: typeof Faker) => {
  const user = new Users();
  user.email = 'admin@example.com';
  user.password = 'password';

  return user;
});
