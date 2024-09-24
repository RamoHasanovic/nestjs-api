/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Comment } from './interface/comment.interface';

@Injectable()
export class CommentsService {
  constructor(private prisma: PrismaService) {}

  async createComment(
    postId: number,
    data: CreateCommentDto,
  ): Promise<Comment> {
    return this.prisma.comment.create({
      data: {
        user: data.user,
        text: data.text,
        post: { connect: { id: postId } },
        parent: data.parentId ? { connect: { id: data.parentId } } : undefined,
      },
    });
  }

  async getAllComments(postId: number): Promise<Comment[]> {
    return this.prisma.comment.findMany({
      where: { postId },
    });
  }
}
