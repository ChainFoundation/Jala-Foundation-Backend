import NotificationCenter from '../notificationCenter';
import User from '../user';

export default class Sms extends NotificationCenter {
  private method: string;

  constructor(user: User, msg: string) {
    super(user, msg);
    this.method = 'sms';
  }
  notifying() {
    this.notify(this.method);
  }
}
