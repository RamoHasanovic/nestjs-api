import { IsString, MinLength } from 'class-validator';

export class RequiredUserCreatePostDto {
  @IsString()
  @MinLength(3)
  readonly user: string;

  readonly title: string;

  readonly content: string;

  readonly image?: string;

  createdAt: any;
}
