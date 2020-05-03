import { Injectable } from '@nestjs/common';
import { InjectRepository, InjectConnection } from '@nestjs/typeorm';
import { Orders } from './orders.entity';
import { Stages } from '../stages/stages.entity';
import { Repository, Connection } from 'typeorm';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Orders)
    private ordersRepository: Repository<Orders>,
    @InjectRepository(Stages)
    private stagesRepository: Repository<Stages>,
    @InjectConnection() private connection: Connection,
  ) {}

  async findAll() {
    return await this.stagesRepository.find({
      relations: ['orders', 'orders.client', 'orders.status'],
    });
  }
}
