import {Stats} from "fs";

const { stat } = require("fs/promises");
const yargs = require("yargs/yargs");

const argv = yargs(process.argv.slice(2)).options({
  path: { type: "string", demandOption: true },
  "entity-type": { type: "boolean", default: false },
}).argv;

console.log(`Getting stats of ${argv.path}`);

const returnEntityType = (metaData: Stats): string => {
  return metaData.isDirectory() ?  'folder' : metaData.isFile() ? 'file' : metaData.isFIFO() ?  'FIFO' : metaData.isSocket() ?  'socket' : metaData.isBlockDevice() ?  'block device' : metaData.isCharacterDevice() ?  'character device' : metaData.isSymbolicLink() ?  'symbolic link' :  'undefined';
};

(async (): Promise<void> => {
  try {
    const metaData = await stat(argv.path);
    console.log(metaData);
    if (argv['entity-type']) {
        console.log("Is a " + returnEntityType(metaData));
    } 
  } catch (err) {
    console.error(err);

    process.exitCode = 1;
  }
})();
