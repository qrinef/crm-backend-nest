import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  async root(): Promise<object> {
    return { API: true };
  }
}
