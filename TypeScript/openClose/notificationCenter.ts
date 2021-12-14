import User from './user';

export default abstract class NotificationCenter {
  constructor(protected user: User, protected msg: string) {}

  notify(method: string) {
    console.log(
      `Notification sent through ${method} to ${this.user.name} saying ${this.msg}`
    );
  }
}
