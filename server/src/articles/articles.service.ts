import { Injectable } from '@nestjs/common';
import { Article } from '@prisma/client';
import { CreatePostDto } from './dto/create-articles.dto';
import { UpdatePostDto } from './dto/update-articles.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ArticlesService {
  constructor(private prisma: PrismaService) {}

  create(data: Article): Promise<Article> {
    return this.prisma.article.create({
      data,
    });
  }

  findAll() {
    return this.prisma.article.findMany({ where: { published: true } });
  }

  findOne(id: string) {
    return this.prisma.article.findUnique({ where: { id } });
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
