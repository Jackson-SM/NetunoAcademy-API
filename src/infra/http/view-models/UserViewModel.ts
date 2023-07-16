import { User } from 'src/domain/entities/User';

export class UserViewModel {
  static toHttp(user: User) {
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      avatar_url: user.avatar_url,
      verified: user.verified,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }
}
