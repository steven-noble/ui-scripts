const { exec } = require("child_process");

module.exports = function () {
  exec(`mkdir functions`, (initErr, initStdout, initStderr) => {
    if (initErr) {
      console.error(`${initErr}`);
      return;
    }
  });

  exec(`mkdir components`, (initErr, initStdout, initStderr) => {
    if (initErr) {
      console.error(`${initErr}`);
      return;
    }
  });

  exec(`mkdir layouts`, (initErr, initStdout, initStderr) => {
    if (initErr) {
      console.error(`${initErr}`);
      return;
    }
  });
};
