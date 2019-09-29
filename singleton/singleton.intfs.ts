interface IStore {
  addProduct: (name: string) => void;
  removeProduct: (name: string) => string | undefined;
  getProducts: () => string[];
}

export { IStore };