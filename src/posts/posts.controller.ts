/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
// posts.controller.ts
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  BadRequestException,
  UseGuards,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { Post as PostModel } from './interfaces/post.interface'; // Importuj Post interface
import { CreateCommentDto } from 'src/comments/dto/create-comment.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async findAll(): Promise<PostModel[]> {
    return this.postsService.getAllPosts();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<PostModel> {
    return this.postsService.getPostById(id);
  }

  @Post()
  async create(@Body() createPostDto: CreatePostDto): Promise<PostModel> {
    return this.postsService.createPost(createPostDto);
  }

  @Post(':postId/comments')
  async addComment(
    @Param('postId') postId: string,
    @Body() createCommentDto: CreateCommentDto,
  ) {
    return this.postsService.addComment(postId, createCommentDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':postId/comments')
  async getComments(@Param('postId') postId: string) {
    return this.postsService.getComments(postId);
  }

  @Put(':id')
  async update(
    @Param('id') id: string, // Ovdje id dolazi kao string
    @Body() updatePostDto: CreatePostDto,
  ): Promise<PostModel> {
    return this.postsService.updatePost(id, updatePostDto); // Proslijediti id kao string
  }

  // @Delete(':id')
  // async delete(@Param('id') id: number): Promise<PostModel> {
  //   return this.postsService.deletePost(id);
  // }
}
