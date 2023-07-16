import { User } from 'src/domain/entities/User';
import { User as RawUser } from '@prisma/client';

export class PrismaUserMapper {
  static toPrisma(user: User): RawUser {
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      password: user.password,
      avatar_url: user.avatar_url,
      verified: user.verified,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }

  static toDomain(user: RawUser): User {
    return new User(
      {
        email: user.email,
        name: user.name,
        password: user.password,
        avatar_url: user.avatar_url,
        verified: user.verified,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
      user.id,
    );
  }
}
