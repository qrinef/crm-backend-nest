import { Controller, Get, UseGuards } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async clients() {
    return await this.clientsService.findAll();
  }
}
