import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clients } from './clients.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Clients])],
})
export class ClientsModule {}
