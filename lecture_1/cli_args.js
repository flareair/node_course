const fs = require("fs");
const { stat } = require("fs/promises");

const filePath = process.argv[2];

console.log(`Getting stats of ${filePath}`);

// fs.stat(filePath, (err, stats) => {
//   if (err) {
//     throw err;
//   }

//   console.log(stats);
// });

(async () => {
  try {
    const metaData = await stat(filePath);

    console.log(metaData);
  } catch (err) {
    console.error(err);

    process.exitCode = 1;
  }
})();
