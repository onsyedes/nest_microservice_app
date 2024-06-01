import { Body, Controller, Get, Post, Res, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
import { CurrentUser } from '../current-user.decorator';
import { UsersDocument } from './models/user.schema';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
  @Get()
  @UseGuards(JwtAuthGuard)
  async getAuthenticatedUser(@CurrentUser() user: UsersDocument) {
    return user;
  }
}
