import { Module } from '@nestjs/common';
// import { PrismaModule } from './prisma/prisma.module';
import { PostsModule } from './posts/posts.module';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [PostsModule, CommentsModule, AuthModule],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
