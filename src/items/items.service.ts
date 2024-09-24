/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// import { Injectable } from '@nestjs/common';
// import { PrismaService } from '../prisma/prisma.service';
// import { CreateItemDto } from './dto/create-item.dto';
// import { Item } from './interfaces/item.interface';

// @Injectable()
// export class ItemsService {
//   constructor(private readonly prisma: PrismaService) {}

//   async findAll(): Promise<Item[]> {
//     return this.prisma.item.findMany();
//   }

//   async findOne(id: number): Promise<Item> {
//     return this.prisma.item.findUnique({
//       where: { id },
//     });
//   }

//   async create(data: CreateItemDto): Promise<Item> {
//     return this.prisma.item.create({
//       data,
//     });
//   }

//   async update(id: number, data: CreateItemDto): Promise<Item> {
//     return this.prisma.item.update({
//       where: { id },
//       data,
//     });
//   }

//   async delete(id: number): Promise<Item> {
//     return this.prisma.item.delete({
//       where: { id },
//     });
//   }
// }
