import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { UserRepository } from 'src/domain/repositories/UserRepository';
import { User } from 'src/domain/entities/User';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}

  async create(user: User): Promise<void> {
    const { id, email, name, password, avatar_url, createdAt, updatedAt } =
      user;

    await this.prisma.user.create({
      data: { id, email, name, password, avatar_url },
    });
  }
}
