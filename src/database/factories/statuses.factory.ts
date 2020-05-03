import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { Statuses } from '../../statuses/statuses.entity';

define(Statuses, (faker: typeof Faker, context: { id; name }) => {
  const status = new Statuses();
  //
  // status.id = context.id;
  // status.name = context.name;

  return status;
});
