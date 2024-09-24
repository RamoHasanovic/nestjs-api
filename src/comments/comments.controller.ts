/* eslint-disable prettier/prettier */
import { Body, Controller, Post, Param, Get } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CommentsService } from './comments.service';

@Controller('posts')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post(':postId/comments')
  async addComment(
    @Param('postId') postId: string, // Pretpostavka da je postId string
    @Body() createCommentDto: CreateCommentDto,
  ) {
    const numericPostId = parseInt(postId, 10);
    return this.commentsService.createComment(numericPostId, createCommentDto);
  }

  @Get(':postId/comments')
  async getAllComments(@Param('postId') postId: string) {
    const numericPostId = parseInt(postId, 10);
    return this.commentsService.getAllComments(numericPostId);
  }
}
