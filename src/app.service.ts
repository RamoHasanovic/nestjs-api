/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.post.findMany(); // Koristi `post` model
  }

  async findOne(id: number) {
    return this.prisma.post.findUnique({
      where: { id },
    });
  }

  async create(data: any) {
    return this.prisma.post.create({
      data,
    });
  }

  async update(id: number, data: any) {
    return this.prisma.post.update({
      where: { id },
      data,
    });
  }

  async delete(id: number) {
    return this.prisma.post.delete({
      where: { id },
    });
  }
}
