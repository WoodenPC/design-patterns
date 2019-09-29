import { ICar, ICarFactory } from './factoryMethod.intfs';
import { Car, CarFactory } from './factoryMethod.impl';

const factory: ICarFactory = new CarFactory();
const testCarVolga: ICar = factory.create('Volga');
const testCarAudi: ICar = factory.create('Audi');

console.log(testCarVolga.name, testCarVolga.price);
console.log(testCarAudi.name, testCarAudi.price);
