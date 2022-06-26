const path = require("path");
const fs = require("fs/promises");

const indexPath = path.resolve(__dirname, "../../dist/index.d.ts");

const main = () => {
  const template = `import "./env";`;
  fs.appendFile(indexPath, template, "utf8");
};

main();
