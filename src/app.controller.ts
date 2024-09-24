/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { PostsService } from './posts/posts.service';
import { CreatePostDto } from './posts/dto/create-post.dto';
import { Post as PostModel } from './posts/interfaces/post.interface';

@Controller('posts')
export class AppController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async findAll(): Promise<PostModel[]> {
    return this.postsService.getAllPosts();
  }

  // @Get(':id')
  // async findOne(@Param('id') id: string): Promise<PostModel> {
  //   return this.postsService.getPostById(id);
  // }

  @Post()
  async create(@Body() createPostDto: CreatePostDto): Promise<PostModel> {
    return this.postsService.createPost(createPostDto);
  }

  // @Delete(':id')
  // async delete(@Param('id') id: string): Promise<PostModel> {
  //   return this.postsService.deletePost(id);
  // }

  // @Put(':id')
  // async update(
  //   @Body() updatePostDto: CreatePostDto,
  //   @Param('id') id: string,
  // ): Promise<PostModel> {
  //   return this.postsService.updatePost(id, updatePostDto);
  // }
}
