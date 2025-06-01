import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ApiResponse } from 'src/common/response';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) { }

  async create(createUserDto: CreateUserDto) {
    const { id } = await this.prisma.user.create({ data: createUserDto });

    return new ApiResponse(true, { id });
  }

  async findAll(efficiency?: number, role?: string) {
    const users = await this.prisma.user.findMany({ where: { efficiency, role } });

    return new ApiResponse(true, { users });
  }

  async findOne(id?: number, efficiency?: number, role?: string) {
    const user = await this.prisma.user.findUnique({ where: { id, efficiency, role } });

    return new ApiResponse(true, { users: user ?? [] });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const updatedUser = await this.prisma.user.update({ where: { id }, data: updateUserDto });

    return new ApiResponse(true, { ...updatedUser });
  }

  async remove(id: number) {
    const deletedUser = await this.prisma.user.delete({ where: { id } });

    return new ApiResponse(true, { ...deletedUser });
  }
}
