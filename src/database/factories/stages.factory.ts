import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { Stages } from '../../stages/stages.entity';

define(Stages, (faker: typeof Faker, context: { id; name }) => {
  const stage = new Stages();

  stage.id = context.id;
  stage.name = context.name;

  return stage;
});
