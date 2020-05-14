import { Injectable, NotFoundException } from '@nestjs/common';
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
      order: { id: 'ASC' },
    });
  }

  async create(form) {
    return await this.clientsRepository.save(form);
  }

  async update(id, form) {
    const found = await this.clientsRepository.findOne({ where: { id } });

    if (!found) {
      throw new NotFoundException(`User not found`);
    }

    this.clientsRepository.merge(found, form);

    return await this.clientsRepository.save(found);
  }

  async delete(id) {
    const result = await this.clientsRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`User not found`);
    }

    return {
      status: 'success',
    };
  }
}
