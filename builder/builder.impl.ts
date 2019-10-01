import { IComputer, IComputerBuilder }from './builder.intfs';

class Computer implements IComputer {
  totalPrice: number;
  motherboard: string = '';
  cpu: string = '';
  gpu: string = '';
  ram: string = '';
  case: string = '';
  cooler: string = '';

  constructor() {
    this.totalPrice = 0;
  }
}

export class ComputerBuilder implements IComputerBuilder {
  computer: IComputer;
  constructor() {
    this.computer = new Computer();
  }

  addMotherboard(name: string, price: number): IComputerBuilder {
    this.computer.motherboard = name;
    this.computer.totalPrice += price;
    return this;
  }

  addGPU(name: string, price: number): IComputerBuilder {
    this.computer.gpu = name;
    this.computer.totalPrice += price;
    return this;
  }
  addRAM(name: string, price: number): IComputerBuilder {
    this.computer.ram = name;
    this.computer.totalPrice += price;
    return this;
  }
  addCase(name: string, price: number): IComputerBuilder {
    this.computer.case = name;
    this.computer.totalPrice += price;
    return this;
  }
  addCooler(name: string, price: number): IComputerBuilder {
    this.computer.cooler = name;
    this.computer.totalPrice += price;
    return this;
  }

  addCpu(name: string, price: number): IComputerBuilder {
    this.computer.cpu = name;
    this.computer.totalPrice += price;
    return this;
  }

  build() {
    return this.computer;
  }
}