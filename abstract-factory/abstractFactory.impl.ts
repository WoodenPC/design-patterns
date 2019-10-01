import { ICar, ICarFactory, ICarProducer } from './abstractFactory.intfs';

class Car implements ICar {
  name: string;
  price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  getInfo = () => {
    return '';
  }
}

class Renault extends Car implements ICar {
  getInfo = () => {
    return 'Family class car';
  }
}

class Audi extends Car implements ICar {
  getInfo = () => {
    return 'Business class car';
  }
}

class RenaultFactory implements ICarFactory {
  create(type: string) {
    // we can switch type
    return new Renault('Logan', 500000);
  }
}

class AudiFactory implements ICarFactory {
  create(type: string) {
    // we can switch type
    return new Audi('A6', 5000000);
  }
}

export class CarProducer implements ICarProducer {
  private renaultFactory: ICarFactory;
  private audiFactory: ICarFactory;
  constructor(){
    this.renaultFactory = new RenaultFactory();
    this.audiFactory = new AudiFactory();
  }
  getFactory(kind: string) {
    switch (kind) {
      case 'family':
        return this.renaultFactory;
      case 'business':
        return this.audiFactory;
      default:
        return this.renaultFactory;
    }
  }
}

