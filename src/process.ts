import { parentPort, workerData } from "worker_threads";

(() => {
    const naturalNumber = [];
    const maxNumber = workerData.maxNumber || 10000;
    console.log(maxNumber)

    target: for(let i=2; i<maxNumber; i++) {
        check: for(let j=2; j<i; j++) {
            if(i % j == 0) {
                continue target;
            }
        }
        naturalNumber.push(i);
    }

    console.log('\n');

    const data = { result: naturalNumber };

    parentPort ? parentPort.postMessage(data) : console.log(data)
})();
