import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module'; // Importuj PrismaModule
import { PostsModule } from './posts/posts.module'; // Importuj PostsModule
import { AppController } from './app.controller'; // Importuj AppController
import { AppService } from './app.service'; // Importuj AppService

@Module({
  imports: [PrismaModule, PostsModule], // Dodaj PostsModule u imports
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
