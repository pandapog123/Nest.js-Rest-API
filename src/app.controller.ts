import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './services/users/users.service';

@Controller('/')
export class AppController {
  constructor(private userService: UsersService) {}

  @Get()
  sendUsers() {
    return this.userService.getUsers();
  }

  @Get(':user_index')
  sendUser(@Param('user_index') userIndex: number) {
    return this.userService.getUser(userIndex);
  }

  @Get(':user_index/:user_param')
  sendUserParam(
    @Param('user_index') userIndex: number,
    @Param('user_param') userParam: string,
  ) {
    return this.userService.getUserParam(userIndex, userParam);
  }

  @Get(':user_index/todos/:todo_index')
  sendTodo(
    @Param('user_index') userIndex: number,
    @Param('todo_index') todoIndex: number,
  ) {
    return this.userService.getTodo(userIndex, todoIndex);
  }

  @Get(':user_index/todos/:todo_index/:todo_param')
  sendTodoParam(
    @Param('user_index') userIndex: number,
    @Param('todo_index') todoIndex: number,
    @Param('todo_param') todoParam: string,
  ) {
    return this.userService.getTodoParam(userIndex, todoIndex, todoParam);
  }
}
