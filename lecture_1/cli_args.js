const { stat } = require("fs/promises");
var argv = require('minimist')(process.argv.slice(2));

if (!argv['path'] || typeof argv['path'] === 'boolean') {
  console.log('--path parameter is required');
  process.exit();
}

const filePath = argv['path'];

console.log(`Getting stats of ${filePath}`);

(async () => {
  try {
    const metaData = await stat(filePath);
    console.log(metaData);

    if (argv['entity-type']) {
      process.stdout.write('Type of entity: ');
      if (metaData.isFile()) console.log('File');
      if (metaData.isDirectory()) console.log('Directory');
      if (metaData.isBlockDevice()) console.log('BlockDevide');
      if (metaData.isCharacterDevice()) console.log('CharacterDevice');
      if (metaData.isFIFO()) console.log('FIFO');
      if (metaData.isSocket()) console.log('Socket');
    }
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  }
})();
