import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersService } from '../users/users.service';
import { Auth } from './auth.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Auth) private authRepository: Repository<Auth>,
    private jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}

  async login(email: string, password: string) {
    const loginResults = await this.usersService.login(email, password);

    if (!loginResults) {
      return null;
    }

    let authEntity = new Auth();
    authEntity.user = loginResults;

    const refreshToken = await this.authRepository.save(authEntity);

    return {
      token: this.jwtService.sign({ email }, { expiresIn: 180 }),
      refreshToken: this.jwtService.sign({
        exp: refreshToken.refreshTokenExpiration,
      }),
      liveRefreshToken: refreshToken.refreshToken,
    };
  }

  public async refreshToken(refreshToken: string) {
    const refresh = await this.authRepository.findOne({ refreshToken });
    await this.authRepository.remove(refresh);
    const loginResults = await this.usersService.findUser(refresh.user);

    let authEntity = new Auth();
    authEntity.user = loginResults;

    const rt = await this.authRepository.save(authEntity);

    return {
      token: this.jwtService.sign(
        { email: loginResults.email },
        { expiresIn: 180 },
      ),
      refreshToken: this.jwtService.sign({
        exp: rt.refreshTokenExpiration,
      }),
      liveRefreshToken: rt.refreshToken,
    };
  }
}
