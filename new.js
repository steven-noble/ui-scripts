import fs from "fs";
import config from "./config.js";
import { componentPascalCase, componentCamelCase } from "./functions/index.js";
import * as child from "child_process";

import notesTemplate from "./templates/notesTemplate.js";
import componentTemplate from "./templates/componentTemplate.js";
import storybookTemplate from "./templates/storybookTemplate.js";
import jestTemplate from "./templates/jestTemplate.js";

if (process.argv.length === 2) {
  console.error("Expected at least one argument!");
  process.exit(1);
}

const dir = `${config.root}components`;
const componentName = process.argv[2];

const args = process.argv.filter((arg) => arg.startsWith("--"));

const notesOutput = notesTemplate(componentName);
const componentOutput = componentTemplate(componentName);
const storybookOutput = storybookTemplate(componentName);
const jestOutput = jestTemplate(componentName);

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

if (!fs.existsSync(`${dir}/${componentCamelCase(componentName)}`)) {
  fs.mkdirSync(`${dir}/${componentCamelCase(componentName)}`);
}

if (!fs.existsSync(`${dir}/${componentName}/index.js`)) {
  fs.writeFile(`${dir}/${componentName}/index.js`, componentOutput, (error) => {
    if (error) {
      console.warn(error);
    }
  });
  fs.writeFile(
    `${dir}/${componentName}/${componentCamelCase(componentName)}.stories.js`,
    storybookOutput,
    (error) => {
      if (error) {
        console.warn(error);
      }
    }
  );
  fs.writeFile(`${dir}/${componentName}/notes.md`, notesOutput, (error) => {
    if (error) {
      console.warn(error);
    }
  });
  fs.writeFile(
    `${dir}/${componentName}/${componentCamelCase(componentName)}.test.js`,
    jestOutput,
    (error) => {
      if (error) {
        console.warn(error);
      }
    }
  );
}

const data = `import ${componentName} from "@components/${componentCamelCase(
  componentName
)}"`;
var proc = child.spawn("pbcopy");
proc.stdin.write(data);
proc.stdin.end();

console.log(
  "\x1b[32m%s\x1b[0m",
  `${componentCamelCase(componentName)} Component created`
);
console.log(
  "\x1b[32m%s\x1b[0m",
  `${componentCamelCase(componentName)} import copied to clipboard!`
);
