import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Statuses } from './statuses.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Statuses])],
})
export class StatusesModule {}
