const { stat } = require("fs/promises");

const args = process.argv.slice(2);
const pathFlagInd = args.findIndex(arg => arg === '--path');

if (pathFlagInd < 0) {
  throw new Error('--path should be specified');
}

const filePath = args[pathFlagInd + 1];
const isEntityTypeRequired = args.findIndex(arg => arg === '--entity-type') > -1 ? true : false;

console.log(`Getting stats of ${filePath} ${isEntityTypeRequired ? 'with' : 'without'} entity type`);


(async () => {

  try {

    const metaData = await stat(filePath);
    console.log(metaData);

    if (isEntityTypeRequired) {
      let entityType;
      if (metaData.isFile()) {
        entityType = 'file';
      } else if (metaData.isDirectory()) {
        entityType = 'directory';
      } else {
        entityType = 'other type';
      }
      console.log(entityType);
    }

  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  }

})();
