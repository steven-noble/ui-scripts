import { exec } from "child_process";
import config from "./config.js";
const dir = `${config.root}`;
const folders = config.folders;

const generateFolders = () => {
  if (!folders) {
    console.error("\x1b[31m%s\x1b[0m", `Error: No folders defined in config.js`);
    return process.exit(1)
  }
  folders.map((folderName) => {
    exec(`mkdir ${dir}/${folderName}`, (initErr, initStdout, initStderr) => {
      if (initErr) {
        console.error("\x1b[31m%s\x1b[0m", `${initErr}`);
        return;
      }
      console.log("\x1b[32m%s\x1b[0m", `${folderName} folder created`);
    });
  });
};

generateFolders();
