import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateCommentDto {
  @IsString()
  @IsOptional()
  readonly user?: string;

  @IsString()
  readonly text: string;

  @IsNumber()
  @IsOptional()
  readonly parentId?: number;
}
