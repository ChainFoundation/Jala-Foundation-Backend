import NotificationCenter from '../notificationCenter';
import User from '../user';

export default class Email extends NotificationCenter {
  private method: string;

  constructor(user: User, msg: string) {
    super(user, msg);
    this.method = 'email';
  }

  notifying() {
    this.notify(this.method);
  }
}
