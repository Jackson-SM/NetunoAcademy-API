import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from 'src/domain/entities/User';
import { AuthRepository } from 'src/domain/repositories/AuthRepository';
import { PrismaService } from '../prisma.service';
import { PrismaUserMapper } from '../mappers/PrismaUserMapper';
import * as bcrypt from 'bcrypt';

@Injectable()
export class PrismaAuthRepository implements AuthRepository {
  constructor(private prisma: PrismaService) {}

  async register(user: User): Promise<void> {
    const userExists = await this.prisma.user.count({
      where: { email: user.email },
    });

    if (userExists > 0) {
      throw new HttpException('User already exists', HttpStatus.CONFLICT);
    }

    const { password } = user;

    const getSalt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, getSalt);

    const userToPrisma = PrismaUserMapper.toPrisma(user);

    await this.prisma.user.create({
      data: { ...userToPrisma, password: passwordHash },
    });
  }

  async login(email: string, password: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    const passwordIsValid = await bcrypt.compare(password, user.password);

    if (!passwordIsValid) {
      throw new HttpException('User is invalid', HttpStatus.NOT_FOUND);
    }

    return PrismaUserMapper.toDomain(user);
  }
}
