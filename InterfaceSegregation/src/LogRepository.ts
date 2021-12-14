import EventLog from './eventLog';
import Read from './R';
import User from './user';

export default class LogRepository implements Read<EventLog> {
  get(): EventLog {
    return new EventLog('1', 'test message');
  }
}
