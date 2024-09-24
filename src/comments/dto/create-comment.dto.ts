/* eslint-disable prettier/prettier */
export class CreateCommentDto {
  readonly postId: number;
  readonly user?: string;
  readonly text: string;
  readonly parentId?: number;

  constructor(postId: number, text: string, user?: string, parentId?: number) {
    this.postId = postId;
    this.text = text;
    this.user = user;
    this.parentId = parentId;
  }
}
