import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async root(): Promise<any> {
    return [{ oooPsie: 'Yo man !' }];
  }

  @Get('profile')
  async root2(): Promise<any> {
    return { data: { test: true } };
  }
}
