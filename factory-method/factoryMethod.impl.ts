import { ICar, ICarFactory } from './factoryMethod.intfs';

class Car implements ICar {
  name: string;
  price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

class CarFactory implements ICarFactory {
  create(type: string) {
    switch (type) {
      case 'Volga':
        return new Car('volga', 50000);
      case 'Renault':
        return new Car('renault', 500000);
      case 'Audi':
        return new Car('audi', 5000000);
      default:
        return new Car('volga', 50000);
    }
  }
}

export { Car, CarFactory };