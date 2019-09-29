interface ICar {
  name: string;
  price: number;
}

interface ICarFactory {
  create: (type: string) => ICar;
}

export { ICar, ICarFactory };