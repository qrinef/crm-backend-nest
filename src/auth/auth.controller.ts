import {
  Controller,
  HttpCode,
  Body,
  Post,
  Res,
  Req,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(200)
  async login(
    @Res() res: Response,
    @Body('email') email,
    @Body('password') password,
  ) {
    const login = await this.authService.login(email, password);

    if (!login) {
      throw new UnauthorizedException();
    }

    res.cookie('auth._live_refresh_token', login.liveRefreshToken, {
      httpOnly: true,
    });
    res.send({
      token: login.token,
      refresh_token: login.refreshToken,
    });
  }

  @Post('refresh')
  @HttpCode(200)
  async refresh(@Res() res: Response, @Req() request) {
    const refresh = await this.authService.refreshToken(
      request.cookies['auth._live_refresh_token'],
    );

    if (!refresh) {
      throw new UnauthorizedException();
    }

    res.cookie('auth._live_refresh_token', refresh.liveRefreshToken, {
      httpOnly: true,
    });
    res.send({
      token: refresh.token,
      refresh_token: refresh.refreshToken,
    });
  }
}
