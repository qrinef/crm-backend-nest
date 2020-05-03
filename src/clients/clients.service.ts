import { Injectable } from '@nestjs/common';
import { InjectRepository, InjectConnection } from '@nestjs/typeorm';
import { Clients } from './clients.entity';
import { Repository, Connection } from 'typeorm';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Clients)
    private clientsRepository: Repository<Clients>,
    @InjectConnection() private connection: Connection,
  ) {}

  async findAll() {
    return await this.clientsRepository.find({
      select: ['id', 'email', 'phone', 'name', 'surname'],
    });
  }
}
