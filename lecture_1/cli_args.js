const { stat } = require("fs/promises");
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

const PATH_FLAG = "path";
const ENTITY_TYPE = "entity-type";

const argv = yargs(hideBin(process.argv)).argv;

if (!argv[PATH_FLAG]) {
  console.log("Error: path is not defined");
  process.exit(1);
}

console.log(`Getting stats of ${argv[PATH_FLAG]}`);

(async () => {
  try {
    const metaData = await stat(argv[PATH_FLAG]);
    console.log(metaData);
    if (argv[ENTITY_TYPE]) {
      console.log(`type: ${getType(metaData)}`);
    }
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  }
})();

function getType(stats) {
  const methods = [
    "isFile",
    "isDirectory",
    "isBlockDevice",
    "isCharacterDevice",
    "isSymbolicLink",
    "isFIFO",
    "isSocket",
  ];

  for (method of methods) {
    if (stats[method]()) {
      return method.slice(2).toLowerCase();
    }
  }
}
