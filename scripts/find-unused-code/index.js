const configurator = require("ts-prune/lib/configurator");
const runner = require("ts-prune/lib/runner");
const {ignore} = require('./ignore-files');

const error = [];

runner.run(configurator.getConfig(), (text) => {
    if (ignore.every(ign => !text.includes(ign))) {
        error.push(text);
    } 
});
setTimeout(() => {
    if (error.length) {
        throw new Error(`Присутствует не используемый код: \n${error.join('\n')}`);
    }
}, 0);
