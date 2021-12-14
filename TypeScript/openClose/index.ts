import User from './user';
import Email from './notifications/email';
import Sms from './notifications/sms';
import SmokeSignal from './notifications/smokeSignals';

const user = new User('Jorge');

const sms = new Sms(User, 'sms');
const smokeSignal = new SmokeSignal(User, 'smokesignal');
const email = new Email(User, 'email');
