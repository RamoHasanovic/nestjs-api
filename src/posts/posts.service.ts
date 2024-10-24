/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { Post as PostModel } from './interfaces/post.interface';
import { CreateCommentDto } from 'src/comments/dto/create-comment.dto';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async addComment(postId: number, createCommentDto: CreateCommentDto) {
    return this.prisma.comment.create({
      data: {
        postId,
        ...createCommentDto,
      },
    });
  }

  async getComments(postId: string) {
    return this.prisma.comment.findMany({
      where: { postId: Number(postId) },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getPostById(id: number): Promise<PostModel> {
    const post = await this.prisma.post.findUnique({
      where: { id },
      include: {
        comments: true,
      },
    });

    if (!post) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }

    return post;
  }

  async createPost(data: CreatePostDto): Promise<PostModel> {
    return this.prisma.post.create({
      data,
    });
  }

  async getAllPosts(): Promise<PostModel[]> {
    return this.prisma.post.findMany();
  }

  async updatePost(id: number, data: CreatePostDto): Promise<PostModel> {
    return this.prisma.post.update({
      where: { id },
      data: {
        user: data.user,
        title: data.title,
        content: data.content,
        image: data.image,
        createdAt: data.createdAt,
      },
    });
  }
}
