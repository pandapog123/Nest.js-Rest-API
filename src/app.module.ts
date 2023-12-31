import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersService } from './services/users/users.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [UsersService],
})
export class AppModule {}
