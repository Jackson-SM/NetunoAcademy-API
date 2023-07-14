import { Injectable } from '@nestjs/common';
import { UploadApiOptions, v2 as cloudinary } from 'cloudinary';
import { ServiceImageRepository } from 'src/domain/repositories/ServiceImageRepository';

@Injectable()
export class CloudinaryService implements ServiceImageRepository {
  async uploadImage(
    file: Express.Multer.File,
    options?: UploadApiOptions,
  ): Promise<string> {
    return 'Hello World';
  }
}
