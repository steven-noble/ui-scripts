import fs from 'fs'
import config from "./config.js"
import { componentPascalCase, componentCamelCase } from './functions/index.js'
import * as child from 'child_process';

import notesTemplate from './templates/notesTemplate.js'
import componentTemplate from './templates/componentTemplate.js'
import storybookTemplateEs5 from './templates/storybookTemplateEs5.js'
import storybookTemplateEs6 from './templates/storybookTemplateEs6.js'
import sassTemplate from './templates/sassTemplate.js'
import scssTemplate from './templates/scssTemplate.js'

if (process.argv.length === 2) {
  console.error('Expected at least one argument!');
  process.exit(1);
}

const dir = `${config.root}components`;
const componentName = process.argv[2];

const args = process.argv.filter(arg => arg.startsWith('--'))

var addSass = args.indexOf('--sass') > -1
var addScss = args.indexOf('--scss') > -1
var isEs5 = args.indexOf('--es5') > -1

const notesOutput = notesTemplate(componentName);
const componentOutput = componentTemplate(componentName, isEs5, addSass, addScss);
const storybookOutputEs5 = storybookTemplateEs5(componentName);
const storybookOutputEs6 = storybookTemplateEs6(componentName);

const sassOutput = sassTemplate(componentName);
const scssOutput = scssTemplate(componentName);

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

fs.mkdirSync(`${dir}/${componentName}`);

if (!fs.existsSync(`${dir}/${componentName}/index.js`)) {
  fs.writeFile(
    `${dir}/${componentName}/index.js`,
    componentOutput,
    (error) => {
      if (error) {
        console.warn(error);
      }
    }
  );
  fs.writeFile(
    `${dir}/${componentName}/${componentName}.stories.js`,
    isEs5 ? storybookOutputEs5 : storybookOutputEs6,
    (error) => {
      if (error) {
        console.warn(error);
      }
    }
  );
  fs.writeFile(
    `${dir}/${componentName}/notes.md`,
    notesOutput,
    (error) => {
      if (error) {
        console.warn(error);
      }
    }
  );
  if (addSass) {
      fs.writeFile(
          `${dir}/${componentName}/styles.sass`,
          sassOutput,
          (error) => {
              if (error) {
                  console.warn(error);
              }
          }
      );
  }
  if (addScss) {
      fs.writeFile(
          `${dir}/${componentName}/styles.scss`,
          scssOutput,
          (error) => {
              if (error) {
                  console.warn(error);
              }
          }
      );
  }
}

const data = `import ${componentPascalCase(componentName)} from "./components/${componentName}"`;
var proc = child.spawn("pbcopy");
proc.stdin.write(data);
proc.stdin.end();

console.log("\x1b[32m%s\x1b[0m", `${componentPascalCase(componentName)} Component created`);
console.log(
  "\x1b[32m%s\x1b[0m",
  `${componentPascalCase(componentName)} import copied to clipboard!`
);
