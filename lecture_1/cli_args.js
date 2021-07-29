const { stat } = require("fs/promises");
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

const PATH_FLAG = "path";
const ENTITY_TYPE = "entity-type";

const argv = yargs(hideBin(process.argv)).argv;

if (!argv[PATH_FLAG]) {
  console.log("Error: path is not defined");
  process.exit();
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
  const types = new Map([
    ["file", stats.isFile()],
    ["folder", stats.isDirectory()],
    ["block device", stats.isBlockDevice()],
    ["character device", stats.isCharacterDevice()],
    ["symbolic link", stats.isSymbolicLink()],
    ["FIFO", stats.isFIFO()],
    ["socket", stats.isSocket()],
  ]);

  let type = "undefined type";
  types.forEach((value, key) => {
    type = value ? key : type;
  });
  return type;
}
