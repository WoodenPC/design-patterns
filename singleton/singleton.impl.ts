import { IStore } from './singleton.intfs';

class Store implements IStore {
  private static instance: Store;
  products: string[] = [];

  private constructor() {
    this.products = [];
  }

  static getInstance() {
    if (!Store.instance) {
      Store.instance = new Store();
    }
    return Store.instance;
  }

  addProduct = (name: string) => {
    this.products.push(name);
  }

  removeProduct = (name: string): string | undefined => {
    const { products } = this;
    const idx: number = products.findIndex((item: string) => item === name);
    if (idx === -1) {
      return;
    }

    return products.splice(idx, 1)[0];
  }

  getProducts = () => [...this.products];
}

export { Store };