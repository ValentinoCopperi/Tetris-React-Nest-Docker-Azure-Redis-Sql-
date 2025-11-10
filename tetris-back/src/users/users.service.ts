import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserResponseDto } from './dtos/res/users.res.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async getUsers(): Promise<UserResponseDto[]> {
    return this.prisma.user.findMany({
      select: {
        id: true,
        email: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }
}
