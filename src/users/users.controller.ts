import { Controller, Get, Post, Body, Patch, Param, Delete, Query, DefaultValuePipe, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiQuery } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post('/create')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @ApiQuery({ name: 'efficiency', required: false })
  @ApiQuery({ name: 'role', required: false })
  @Get('/get')
  findAll(@Query('efficiency', new ParseIntPipe({ optional: true })) efficiency?: number, @Query('role') role?: string) {
    return this.usersService.findAll(efficiency, role);
  }

  @ApiQuery({ name: 'efficiency', required: false, type: Number })
  @ApiQuery({ name: 'role', required: false })
  @Get('/get/:id')
  findOne(@Param('id', new ParseIntPipe) id: number, @Query('efficiency', new ParseIntPipe({ optional: true })) efficiency?: number, @Query('role') role?: string) {
    return this.usersService.findOne(id, efficiency, role);
  }

  @Patch('/update/:id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
