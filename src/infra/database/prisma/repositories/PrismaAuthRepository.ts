import { Injectable } from '@nestjs/common';
import { User } from 'src/domain/entities/User';
import { AuthRepository } from 'src/domain/repositories/AuthRepository';
import { PrismaService } from '../prisma.service';
import { PrismaUserMapper } from '../mappers/PrismaUserMapper';
import { ServiceImageRepository } from 'src/domain/repositories/ServiceImageRepository';

@Injectable()
export class PrismaAuthRepository implements AuthRepository {
  constructor(private prisma: PrismaService) {}

  async register(user: User): Promise<void> {
    const userToPrisma = PrismaUserMapper.toPrisma(user);

    await this.prisma.user.create({
      data: userToPrisma,
    });
  }
}
