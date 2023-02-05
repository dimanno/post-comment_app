import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class CreatePostDto {
  @ApiProperty()
  authorId: string;

  @ApiProperty()
  author: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  body: string;

  @ApiProperty({ required: false })
  category?: string;

  @ApiProperty({ required: false, default: false })
  published?: boolean = false;
}
