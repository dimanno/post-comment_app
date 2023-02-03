import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class UsersService {
  async getUsers() {
    // const users = await
    return [{ id: 1, name: 'Tadey' }];
  }
}
