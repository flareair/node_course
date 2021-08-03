const {stat} = require("fs/promises");

const args = process.argv.slice(2);

const filePath = args[0];

console.log(`Getting stats of ${filePath}`);

// fs.stat(filePath, (err, stats) => {
//   if (err) {
//     throw err;
//   }

//   console.log(stats);
// });

(async (): Promise<void> => {
  try {
    const metaData = await stat(filePath);
    if (args.includes('--entity-type')) {
      console.log(metaData);
      metaData.isDirectory() ? console.log('Is a folder') : console.log('Is a file')
    } else {
      console.log(metaData);
    }
  } catch (err) {
    console.error(err);

    process.exitCode = 1;
  }
})();
