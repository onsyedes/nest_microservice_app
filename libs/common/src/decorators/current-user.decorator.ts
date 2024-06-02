import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserDocument } from '../models/user-schema';

const GetCurrentUserByContext = (context: ExecutionContext): UserDocument => {
  return context.switchToHttp().getRequest().user;
};

export const CurrentUser = createParamDecorator(
  (_data: never, context: ExecutionContext) => GetCurrentUserByContext(context),
);
