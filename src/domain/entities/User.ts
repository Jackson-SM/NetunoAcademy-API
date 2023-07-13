import { randomUUID } from 'crypto';

interface UserProps {
  email: string;
  name: string;
  password: string;
  avatar_url?: string | null;
  createdAt?: Date;
  updatedAt?: Date;
}

export class User {
  private props: UserProps;
  private _id: string;

  constructor(props: UserProps) {
    this._id = randomUUID();
    this.props = {
      ...props,
      avatar_url: props.avatar_url ?? null,
      createdAt: props.createdAt ?? new Date(),
      updatedAt: new Date(),
    };
  }

  // Email
  set email(email: string) {
    this.props.email = email;
  }
  get email(): string {
    return this.props.email;
  }

  // Name
  set name(name: string) {
    this.props.name = name;
  }
  get name(): string {
    return this.props.name;
  }

  // Password
  set password(password: string) {
    this.props.password = password;
  }
  get password(): string {
    return this.props.password;
  }

  // Avatar URL
  set avatar_url(avatar_url: string | null) {
    this.props.avatar_url = avatar_url;
  }
  get avatar_url(): string | null {
    return this.props.avatar_url;
  }

  // CreatedAt
  get createdAt(): Date | null {
    return this.props.createdAt;
  }

  // UpdatedAt
  set updatedAt(updatedAt: Date | null) {
    this.props.updatedAt = updatedAt;
  }
  get updatedAt(): Date | null {
    return this.props.updatedAt;
  }
}
