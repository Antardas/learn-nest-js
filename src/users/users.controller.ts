import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  getUsers() {
    return this.usersService.findAll();
  }

  @Get(':id')
  getUser(@Param('id') id: string) {
    return this.usersService.findById(parseInt(id, 10));
  }

  @Post()
  createUser(
    @Body()
    createUserDto: {
      id: number;
      email: string;
      name: string;
      role: 'INTERN' | 'ENGINEER' | 'ADMIN';
    },
  ) {
    return this.usersService.create(createUserDto);
  }

  @Patch(':id')
  updateUser(
    @Param('id') id: string,
    @Body()
    updateUserDto: {
      email?: string;
      name?: string;
      role?: 'INTERN' | 'ENGINEER' | 'ADMIN';
    },
  ) {
    return updateUserDto;
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return `Delete user with id ${id}`;
  }
}
