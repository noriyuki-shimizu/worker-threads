import { Worker } from "worker_threads";

type ExecuteThread = (filepath: string, workerData: object) => Promise<{threadId: number, result: unknown[]}>;

export const execThread: ExecuteThread = (filepath, workerData) => {
    return new Promise((res, rej) => {
        const worker = new Worker(filepath, { workerData });
        worker.on('message', (message) => {
            res({ threadId: worker.threadId, result: message.result });
        });
        worker.on('error', rej);
    })
}