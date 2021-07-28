const { stat } = require("fs/promises");
const args = process.argv.slice(2);

if (!args.includes('--path') || !args[args.indexOf('--path') + 1]) {
  console.log('--path parameter is required');
  process.exit();
}

const filePath = args[args.indexOf('--path') + 1];

console.log(`Getting stats of ${filePath}`);

(async () => {
  try {
    const metaData = await stat(filePath);
    console.log(metaData);

    if (args.includes('--entity-type')) {
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
