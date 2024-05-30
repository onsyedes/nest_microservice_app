import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UsersDocument } from './users/models/user.schema';

const GetCurrentUserByContext = (context: ExecutionContext): UsersDocument => {
  return context.switchToHttp().getRequest().user;
};

export const CurrentUser = createParamDecorator(
  (_data: never, context: ExecutionContext) => GetCurrentUserByContext(context),
);
