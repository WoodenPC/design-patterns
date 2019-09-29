import { IStore } from './singleton.intfs';
import { Store } from './singleton.impl';

const store1: IStore = Store.getInstance();
const store2: IStore = Store.getInstance();

console.log('----------------------------------------------');
console.log('test addProduct');
store1.addProduct('apple');
store2.addProduct('banana');
store1.addProduct('bread');

console.log('store 1 products', store1.getProducts());
console.log('store 2 products', store2.getProducts());

console.log('----------------------------------------------');
console.log('test removeProduct');

store1.removeProduct('banana');
console.log('store 1 products', store1.getProducts());
console.log('store 2 products', store2.getProducts());