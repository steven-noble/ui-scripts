import fs from "fs";
import config from "./config.js";
import {
  componentPascalCase,
  componentCamelCase,
  componentLowerCase,
  componentHyphenated,
} from "./functions/index.js";
import * as child from "child_process";

import notesTemplate from "./templates/notesTemplate.js";
import componentTemplate from "./templates/componentTemplate.js";
import storybookTemplate from "./templates/storybookTemplate.js";
import jestTemplate from "./templates/jestTemplate.js";

if (process.argv.length === 2) {
  console.log(
    "\x1b[31m%s\x1b[0m",
    `Command Failed: Expected at least one argument!`
  );
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

if (!fs.existsSync(`${dir}/${componentHyphenated(componentName)}`)) {
  fs.mkdirSync(`${dir}/${componentHyphenated(componentName)}`);
}

if (!fs.existsSync(`${dir}/${componentHyphenated(componentName)}/index.js`)) {
  fs.writeFile(
    `${dir}/${componentHyphenated(componentName)}/index.js`,
    componentOutput,
    (error) => {
      if (error) {
        console.warn(error);
      }
    }
  );
  fs.writeFile(
    `${dir}/${componentHyphenated(componentName)}/${componentHyphenated(componentName)}.stories.js`,
    storybookOutput,
    (error) => {
      if (error) {
        console.warn(error);
      }
    }
  );
  fs.writeFile(`${dir}/${componentHyphenated(componentName)}/notes.md`, notesOutput, (error) => {
    if (error) {
      console.warn(error)
    }
  });
  fs.writeFile(
    `${dir}/${componentHyphenated(componentName)}/${componentHyphenated(componentName)}.test.js`,
    jestOutput,
    (error) => {
      if (error) {
        console.warn(error);
      }
    }
  );

  const data = `import ${componentName} from "@components/${componentHyphenated(
    componentName
  )}"`;
  var proc = child.spawn("pbcopy");
  proc.stdin.write(data);
  proc.stdin.end();

  console.log(
    "\x1b[32m%s\x1b[0m",
    `Component ${componentPascalCase(componentName)} created`
  );
  console.log(
    "\x1b[32m%s\x1b[0m",
    `${componentCamelCase(componentName)} import copied to clipboard!`
  );
} else {
  console.log(
    "\x1b[31m%s\x1b[0m",
    `Command Failed: A component with this name already exists`
  );
  process.exit(1);
}
