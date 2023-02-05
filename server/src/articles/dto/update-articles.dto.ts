import { PartialType } from '@nestjs/swagger';
import { CreatePostDto } from './create-articles.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePostDto extends PartialType(CreatePostDto) {
  @ApiProperty()
  title: string;

  @ApiProperty()
  body: string;
}
