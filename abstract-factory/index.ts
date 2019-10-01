import { ICar, ICarFactory, ICarProducer } from './abstractFactory.intfs';
import { CarProducer } from './abstractFactory.impl';

const carProducer: ICarProducer = new CarProducer();

const factory1: ICarFactory = carProducer.getFactory('family');
const factory2: ICarFactory = carProducer.getFactory('business');

const car1: ICar = factory1.create('test');
const car2: ICar = factory2.create('test');

console.log('car1 info', car1.getInfo());
console.log('car2 info', car2.getInfo());