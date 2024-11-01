import { IsOptional, IsString, MinLength } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @MinLength(3)
  readonly user: string;

  @IsString()
  readonly title: string;

  @IsString()
  readonly content: string;

  @IsString()
  @IsOptional()
  readonly image?: string;

  createdAt: any;
}
