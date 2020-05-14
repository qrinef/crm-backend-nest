import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';
import { ClientsService } from './clients.service';
import { AuthGuard } from '@nestjs/passport';
import { CreateClientDto } from './create-client.dto';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async clients() {
    return await this.clientsService.findAll();
  }

  @Post()
  async create(@Body() createClientDto: CreateClientDto) {
    return await this.clientsService.create(createClientDto);
  }

  @Put('/:id')
  async update(
    @Param('id') id: number,
    @Body() createClientDto: CreateClientDto,
  ) {
    return await this.clientsService.update(id, createClientDto);
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.clientsService.delete(id);
  }
}
