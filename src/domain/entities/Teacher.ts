import { randomUUID } from 'crypto';

interface TeacherProps {
  name: string;
  age: number;
  training: string;
  stacks: string[];
  description: string;
  photo: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Course {
  private props: TeacherProps;
  private _id: string;

  constructor(props: TeacherProps, id?: string) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      photo: props.photo ?? null,
      createdAt: props.createdAt ?? new Date(),
      updatedAt: new Date(),
    };
  }

  //Id
  get id(): string {
    return this._id;
  }

  // Name
  set name(name: string) {
    this.props.name = name;
  }
  get name(): string {
    return this.props.name;
  }

  // Age
  set age(age: number) {
    this.props.age = age;
  }
  get age(): number {
    return this.props.age;
  }

  // Description
  set description(description: string) {
    this.props.description = description;
  }
  get description(): string {
    return this.props.description;
  }

  // Training
  set training(training: string | null) {
    this.props.training = training;
  }
  get training(): string | null {
    return this.props.training;
  }

  // Stacks
  set stacks(stacks: string[]) {
    this.props.stacks = stacks;
  }
  get stacks(): string[] {
    return this.props.stacks;
  }

  // Photo
  set photo(photo: string) {
    this.props.photo = photo;
  }
  get photo(): string {
    return this.props.photo;
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
