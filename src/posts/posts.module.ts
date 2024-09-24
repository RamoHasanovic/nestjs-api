/* eslint-disable prettier/prettier */
// posts.module.ts
import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [PostsService],
  controllers: [PostsController],
  exports: [PostsService], // Ako želiš da PostService bude dostupan izvan ovog modula
})
export class PostsModule {}
