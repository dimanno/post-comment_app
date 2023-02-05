import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreatePostDto } from './dto/create-articles.dto';
import { UpdatePostDto } from './dto/update-articles.dto';
import { Article } from '@prisma/client';

@Controller('posts')
export class ArticlesController {
  constructor(private readonly postsService: ArticlesService) {}

  @Post()
  createPost(@Body() data: Article): Promise<Article> {
    return this.postsService.create(data);
  }

  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostData: Article) {
    return this.postsService.update(+id, updatePostData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postsService.remove(+id);
  }
}
