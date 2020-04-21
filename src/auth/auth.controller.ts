import { Controller, HttpCode, Body, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(200)
  @Post('login')
  async login(@Body('email') email, @Body('password') password) {
    return await this.authService.login(email, password);
  }

  @HttpCode(200)
  @Post('refresh')
  async refresh(@Body('refresh_token') refreshToken: string): Promise<any> {
    return await this.authService.refreshToken(refreshToken);
  }
}
