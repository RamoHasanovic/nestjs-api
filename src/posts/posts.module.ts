/* eslint-disable prettier/prettier */
// posts.module.ts
import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { PrismaModule } from '../prisma/prisma.module'; // Ako koristiš PrismaModule

@Module({
  imports: [PrismaModule], // Ako koristiš PrismaModule
  providers: [PostsService],
  controllers: [PostsController],
  exports: [PostsService], // Ako želiš da PostService bude dostupan izvan ovog modula
})
export class PostsModule {}
