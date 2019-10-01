export interface ICar {
  name: string;
  price: number;
  getInfo(): string;
}

export interface ICarFactory {
  create: (type: string) => ICar;
}

export interface ICarProducer {
  getFactory(kind: string): ICarFactory;
}