import Read from './R';
import Cud from './Cud';
import User from './user';

export default class UserRepository implements Read<User>, Cud<User> {
  insert(user: User) {}

  update(user: User) {
    return user;
  }

  get(): User {
    return new User('1');
  }

  delete(id: string) {}
}
