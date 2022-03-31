var npm = require("npm");
module.exports = function (query) {

  npm.load(function (err) {
    // handle errors

    // install module ffi
    npm.commands.install(["npm"], function (er, data) {
      // log errors or data
      console.log(er);
      console.log(data);
    });

    npm.on("log", function (message) {
      // log installation progress
      console.log(message);
    });
  });
};
