import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from './entity/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/')
  async create(@Body() user: User): Promise<{ id: string }> {
    return this.usersService.create(user);
  }

  @Get('/')
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get('/:id')
  async findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(id);
  }
}
