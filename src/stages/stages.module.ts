import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Stages } from './stages.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Stages])],
})
export class StagesModule {}
