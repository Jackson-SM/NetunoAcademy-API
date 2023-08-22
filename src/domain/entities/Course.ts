import { randomUUID } from 'crypto';

interface CourseProps {
  title: string;
  teacher: string;
  description: string;
  avatar_url: string;
  students: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Course {
  private props: CourseProps;
  private _id: string;

  constructor(props: CourseProps, id?: string) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      avatar_url: props.avatar_url ?? null,
      createdAt: props.createdAt ?? new Date(),
      updatedAt: new Date(),
    };
  }

  //Id
  get id(): string {
    return this._id;
  }

  // Email
  set title(title: string) {
    this.props.title = title;
  }
  get title(): string {
    return this.props.title;
  }

  // Name
  set teacher(teacher: string) {
    this.props.teacher = teacher;
  }
  get teacher(): string {
    return this.props.teacher;
  }

  // Password
  set description(description: string) {
    this.props.description = description;
  }
  get description(): string {
    return this.props.description;
  }

  // Avatar URL
  set avatar_url(avatar_url: string | null) {
    this.props.avatar_url = avatar_url;
  }
  get avatar_url(): string | null {
    return this.props.avatar_url;
  }

  // Password
  set students(students: number) {
    this.props.students = students;
  }
  get students(): number {
    return this.props.students;
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
