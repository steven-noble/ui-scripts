const { exec } = require("child_process");
const fs = require("fs");
const https = require("https");
const readline = require("readline");
const path = require("path");
const makeSb = require("./functions/storybook.js");
const makeFolders = require("./functions/folders.js");
const makeTailwind = require("./functions/tailwind.js");
const makeNext = require("./functions/next.js");

// Function
function Ask(query) {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) =>
    readline.question(query, (ans) => {
      readline.close();
      resolve(ans);
    })
  );
}

// example useage
async function init() {
  var nextJs = await Ask("Would you like to install NextJS? (Y/n): ");

  var storybook = await Ask("Would you like to install Storybook? (Y/n): ");

  var storybookConfig = await Ask(
    "Would you like to install Storybook config? (Y/n): "
  );

  var tailwindCss = await Ask("Would you like to install TailwindCSS (Y/n): ");

  var files = await Ask("Add missing default files? (Y/n): ");

  console.log(
    `yarn add ${nextJs === "y" ? "npx create-next-app" : ""}${
      storybook === "y" ? " && npx sb init" : ""
    }${storybookConfig === "y" ? " && storybookConfig" : ""}${
      tailwindCss === "y" ? " && tailwindCss" : ""
    }`
  );

  if (files === 'y') {
      makeFolders()
  }
  if (storybookConfig === 'y') {
      makeSb()
  }
}

init();
