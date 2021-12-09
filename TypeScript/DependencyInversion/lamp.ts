import gadgetInterface from './gadgetInterface';

export default class Lamp implements gadgetInterface {
  private status: boolean;
  constructor() {
    this.status = false;
  }
  turnOn() {
    this.status = true;
    console.log('Lamp is ON');
  }
  turnOff() {
    this.status = false;
    console.log('Lamp is OFF');
  }
  getStatus(): boolean {
    return this.status;
  }
}
