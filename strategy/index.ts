import { IWorker } from './strategy.intfs';
import { FootJob, HandJob, Worker } from './strategy.impl';

const worker: IWorker = new Worker();

worker.doWork(new HandJob());
worker.doWork(new FootJob());
