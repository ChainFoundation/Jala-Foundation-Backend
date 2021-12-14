export default interface Cud<T> {
  insert(user: T): void;

  delete(id: string): void;

  update(user: T): T;
}
