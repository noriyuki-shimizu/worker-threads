import fs from 'fs';
import { execThread } from './thread';

(async () => {
    const loop = 4;
    const maxNumber = 100000;

    const results = await Promise.all(
        [...Array(loop)]
            .map(() => {
                return execThread(require.resolve('./process'), {
                    maxNumber,
                })
            })
    );

    fs.writeFileSync('./output-result.json', JSON.stringify(
        results
            .sort((a, b) => a.threadId > b.threadId ? 1 : -1)
            .flatMap(result => result.result)
    ));
})()
