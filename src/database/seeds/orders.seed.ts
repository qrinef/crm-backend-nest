import { Factory, Seeder } from 'typeorm-seeding';
import { Orders } from '../../orders/orders.entity';
import { Statuses } from '../../statuses/statuses.entity';

export class CreateOrders implements Seeder {
  public async run(factory: Factory): Promise<void> {
    const statuses = ['New', 'In progress', 'Success'];
    const statusesEntity = [];

    for (const status of statuses) {
      statusesEntity.push(await factory(Statuses)().create({ name: status }));
    }

    // const stages = [20, 3, 6, 1, 15, 5, 3, 7, 2, 10];
    const stages = [
      { id: 1, name: 'Stage 1', ordersQuantity: 20 },
      { id: 2, name: 'Stage 2', ordersQuantity: 3 },
      { id: 3, name: 'Stage 3', ordersQuantity: 6 },
      { id: 4, name: 'Stage 4', ordersQuantity: 1 },
      { id: 5, name: 'Stage 5', ordersQuantity: 15 },
      { id: 6, name: 'Stage 6', ordersQuantity: 5 },
      { id: 7, name: 'Stage 7', ordersQuantity: 3 },
      { id: 8, name: 'Stage 8', ordersQuantity: 7 },
      { id: 9, name: 'Stage 9', ordersQuantity: 2 },
      { id: 10, name: 'Stage 10', ordersQuantity: 10 },
    ];

    for (const stage of stages) {
      await factory(Orders)({
        statuses: statusesEntity,
        stage: { id: stage.id, name: stage.name },
      }).createMany(stage.ordersQuantity);
    }
  }
}
