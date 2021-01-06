const runner = require("ts-prune/lib/runner");
const {ignore} = require('./ignore-files');

const error = [];

runner.run({ project: 'tsconfig.dev.json' }, (text) => {
    if (ignore.every(ign => !text.includes(ign))) {
        error.push(text);
    } 
});
setTimeout(() => {
    if (error.length) {
        throw new Error(`Присутствует не используемый код: \n${error.join('\n')}`);
    }
}, 0);
