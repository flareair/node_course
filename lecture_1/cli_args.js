const { stat } = require("fs/promises");
const args = process.argv.slice(2);
const filePath = args[args.indexOf('--path') + 1];

if (!args.includes('--path') || !filePath) {
  console.log('--path is required');
}

function isEntityType() {
  return args.findIndex(arg => arg === '--entity-type') > -1 ? true : false;
}

console.log(`Getting stats of ${filePath}`);

(async () => {
  try {
    const metaData = await stat(filePath);
    console.log(metaData);
    if (isEntityType) {
      let entityType;
      if (metaData.isFile()) {
        entityType = 'file';
      } else if (metaData.isDirectory()) {
        entityType = 'directory';
      } else {
        entityType = 'smth else';
      }
      console.log(entityType);
    }
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  }
})();
