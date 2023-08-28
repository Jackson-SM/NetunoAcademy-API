import { Injectable } from '@nestjs/common';
import { CourseRepository } from 'src/domain/repositories/CourseRepository';
import { PrismaService } from '../prisma.service';
import { Course } from 'src/domain/entities/Course';
import { PrismaCourseMapper } from '../mappers/PrismaCourseMapper';

@Injectable()
export class PrismaCourseRepository implements CourseRepository {
  constructor(private prisma: PrismaService) {}
  async create(course: Course): Promise<Course> {
    const courseMapper = PrismaCourseMapper.toPrisma(course);

    const rawCourse = await this.prisma.course.create({
      data: courseMapper,
    });

    return PrismaCourseMapper.toDomain(rawCourse);
  }

  async getById(id: string): Promise<Course> {
    const course = await this.prisma.course.findUnique({
      where: {
        id,
      },
    });

    return PrismaCourseMapper.toDomain(course);
  }
}
