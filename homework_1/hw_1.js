const program = require('commander');
const fs = require('fs');
const { stat } = require('fs/promises');

program
  .option('-p --path <path>', 'required: path (path to file)')
  .option('-o --output', 'optional: is output type there')
  .parse(process.argv);

const { path, output } = program.opts();

const checkPath = (path) => {
  if (path === undefined || typeof path !== 'string') {
    console.error('path is not valid');
    process.exitCode = 1;
  }
};
checkPath(path);

const checkOutput = (output, stats) => {
  return stats.isDirectory() ? 'Output type is folder' : 'Output type is file';
};

console.log(`Getting stats ${path}`);

(async () => {
  try {
    const metaData = await stat(path);

    if (output) {
      console.log(checkOutput(output, metaData));
    }
    console.log(metaData);
  } catch (err) {
    console.error(err);

    process.exitCode = 1;
  }
})();
