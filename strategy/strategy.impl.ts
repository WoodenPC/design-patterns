import { IJob, IWorker } from './strategy.intfs';

export class HandJob implements IJob {
  doJob() {
    console.log('this is hand job');
  }
}

export class FootJob implements IJob {
  doJob() {
    console.log('this is foot job');
  }
}

export class Worker implements IWorker {
  doWork(job: IJob) {
    job.doJob();
  }
}