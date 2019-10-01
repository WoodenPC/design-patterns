export interface IComputer {
  motherboard: string;
  cpu: string;
  gpu: string;
  ram: string;
  case: string;
  cooler: string;
  totalPrice: number;
}

export interface IComputerBuilder {
  addMotherboard(motherboard: string, price: number): IComputerBuilder;
  addCpu(name: string, price: number): IComputerBuilder;
  addGPU(name: string, price: number): IComputerBuilder;
  addRAM(name: string, price: number): IComputerBuilder;
  addCase(name: string, price: number): IComputerBuilder;
  addCooler(name: string, price: number): IComputerBuilder;
  build(): IComputer;
}