import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Param,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { Post as PostModel } from './interfaces/post.interface'; // Importuj Post interface
import { AuthGuard } from '@nestjs/passport';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  findAll(): Promise<PostModel[]> {
    return this.postsService.getAllPosts();
  }

  @Get(':id')
  findOne(@Param('id', new ParseIntPipe()) id: number): Promise<PostModel> {
    return this.postsService.getPostById(id);
  }

  @Post()
  create(@Body() createPostDto: CreatePostDto): Promise<PostModel> {
    return this.postsService.createPost(createPostDto);
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  update(
    @Param('id', new ParseIntPipe()) id: number, // Ovdje id dolazi kao string
    @Body() updatePostDto: CreatePostDto,
  ): Promise<PostModel> {
    return this.postsService.updatePost(id, updatePostDto); // Proslijediti id kao string
  }

  // @Delete(':id')
  // async delete(@Param('id') id: number): Promise<PostModel> {
  //   return this.postsService.deletePost(id);
  // }
}
