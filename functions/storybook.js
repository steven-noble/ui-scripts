const fse = require("fs-extra");

module.exports = function () {
  const srcDir = `./scripts/templates/.storybook`;
  const destDir = `./.storybook`;
  // To copy a folder or file
  fse.copySync(srcDir, destDir, { overwrite: true }, function (err) {
    if (err) {
      console.error(err);
    } else {
      console.log("success!");
    }
  });
};
