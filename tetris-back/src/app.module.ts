import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma.module';
import { AppController } from './app.controller';
import { RedisService } from './redis.service';

@Module({
  imports: [PrismaModule, UsersModule],
  controllers: [AppController],
  providers: [RedisService],
})
export class AppModule {}
