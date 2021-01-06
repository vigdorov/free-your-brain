const fs = require('fs');
const path = require('path');
const aliases = require('./config.json');
const tsconfig = require('../../tsconfig.json');

const CURRENT_FOLDER = process.cwd();

function createTsConfigDev() {
    const tsConfigDev = {
        ...tsconfig,
        compilerOptions: {
            ...tsconfig.compilerOptions,
            paths: Object.entries(aliases).reduce((acc, [key, value]) => ({
                ...acc,
                [`${key}/*`]: [`./${value}/*`],
            }), {}),
        }
    };
    fs.writeFileSync(path.resolve('tsconfig.dev.json'), JSON.stringify(tsConfigDev, null, 4));
}

function createSymlinks() {
    if (!fs.existsSync('./node_modules')) {
        fs.mkdirSync('node_modules');
    }

    try {
        for (const alias in aliases) {
            const folder = aliases[alias];
            const pathInPackage = path.resolve(CURRENT_FOLDER, folder);
            if (!fs.existsSync(folder)) {
                continue;
            }

            const symlinkPath = path.resolve(`./node_modules/${alias}`);
            if (fs.existsSync(symlinkPath)) {
                continue;
            }

            fs.symlinkSync(pathInPackage, symlinkPath);
            console.info(`${symlinkPath} --> ${pathInPackage}`);

        }
    } catch (e) {
        console.info(`${e}`);
    }
}

createSymlinks();
createTsConfigDev();
