export interface IJob {
  doJob: () => void;
}

export interface IWorker {
  doWork: (job: IJob) => void;
}