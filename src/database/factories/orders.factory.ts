import * as Faker from 'faker';
import { define, factory } from 'typeorm-seeding';
import { Orders } from '../../orders/orders.entity';
import { Clients } from '../../clients/clients.entity';
import { Stages } from '../../stages/stages.entity';

define(Orders, (faker: typeof Faker, context: { status; statuses; stage }) => {
  const orders = new Orders();

  orders.client = factory(Clients)() as any;
  orders.status = faker.random.arrayElement(Object.values(context.statuses));
  orders.price = 100;
  orders.stage = factory(Stages)(context.stage) as any;

  return orders;
});
