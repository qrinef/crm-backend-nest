import { Injectable } from '@nestjs/common';
// import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { randomBytes } from 'crypto';

@Injectable()
export class AuthService {
  constructor(
    // private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    // const user = await this.usersService.findOne(username);
    // if (user && user.password === pass) {
    //   const { password, ...result } = user;
    //   return result;
    // }
    // return null;
  }

  async login(email: string, password: string) {
    const payload = { email, password };
    const refreshToken = randomBytes(64).toString('hex');

    return {
      token: this.jwtService.sign(payload),
      refresh_token: refreshToken,
    };
  }

  public async refreshToken(oldRefreshToken: string): Promise<any> {
    const payload = { email: 'test', password: 'test' };
    const refreshToken = randomBytes(64).toString('hex');

    return {
      token: this.jwtService.sign(payload),
      refresh_token: refreshToken,
    };

    // const refreshToken = this.jwtService.sign(payload, {
    //   subject: TokenSubject.lock(payload),
    //   algorithm: jwtConstants.algorithm,
    //   expiresIn: jwtConstants.expiresIn,
    // });
    //
    // return { refreshToken };
  }
}
