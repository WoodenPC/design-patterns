import { IComputer, IComputerBuilder } from './builder.intfs';
import { ComputerBuilder } from './builder.impl';

const comp: IComputer = new ComputerBuilder()
  .addCase('test case', 1000)
  .addCooler('test cooler', 2000)
  .addCpu('ryzen cpu', 15000)
  .addGPU('nvidia gpu', 30000)
  .addMotherboard('random motherboard', 5000)
  .addRAM('some ram', 15000)
  .build();

console.log(comp);