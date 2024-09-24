/* eslint-disable prettier/prettier */
export class CreatePostDto {
  readonly user: string;
  readonly title: string;
  readonly content: string;
  readonly image?: string;
  createdAt: any;

  constructor(user: string, title: string, content: string, image?: string) {
    this.user = user;
    this.title = title;
    this.content = content;
    this.image = image;
  }
}
