import { AbstractRepository } from '@app/common';
import { Injectable, Logger } from '@nestjs/common';
import { UsersDocument } from './models/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersRepository extends AbstractRepository<UsersDocument> {
  protected readonly logger = new Logger(UsersRepository.name);

  constructor(
    @InjectModel(UsersDocument.name) userModel: Model<UsersDocument>,
  ) {
    super(userModel);
  }
}
