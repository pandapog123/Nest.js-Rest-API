import { Injectable } from '@nestjs/common';
import data from '../../data';

@Injectable()
export class UsersService {
  private users = data.users;

  getUsers() {
    return this.users;
  }

  getUser(userIndex: number) {
    return this.users[userIndex];
  }

  getUserParam(userIndex: number, paramName: string) {
    return this.getUser(userIndex)[paramName];
  }

  getTodo(userIndex: number, todoIndex: number) {
    return this.getUser(userIndex).todos[todoIndex];
  }

  getTodoParam(userIndex: number, todoIndex: number, paramName: string) {
    return this.getTodo(userIndex, todoIndex)[paramName];
  }
}
