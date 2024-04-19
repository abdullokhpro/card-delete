export class User {
  constructor(name, quantity, unit, price) {
    this.id = `${new Date().getTime()}`;
    this.name = name;
    this.quantity = quantity;
    this.unit = unit;
    this.price = price;
  }
}
