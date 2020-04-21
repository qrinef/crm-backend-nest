import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
// import { UsersModule } from './users/users.module';
// import { ProfilesModule } from './profiles/profiles.module';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { join } from 'path';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'mongodb',
    //   host: 'localhost',
    //   database: 'test',
    //   authSource: 'admin',
    //   username: 'admin123',
    //   password: 'password123',
    //   entities: [join(__dirname, '**/**.entity{.ts,.js}')],
    //   synchronize: true,
    // }),
    AuthModule,
    // UsersModule,
    // ProfilesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
