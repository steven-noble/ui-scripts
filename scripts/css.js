const fs = require("fs");
const dir = "./components";
const componentName = process.argv[2];

fs.readFile(`${dir}/${componentName}/index.js`, "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  var classes = [];
  var styles = [];

  data.replace(/className=['"][^'"]+/g, function (m) {
    // https://regex101.com/r/jD0wX1/1
    classes = classes.concat(m.match(/[^'"]+$/)[0].split(" ")); // https://regex101.com/r/jD0wX1/2
  }); // take all classes

  classes = classes.filter(function (item, pos) {
    return classes.indexOf(item) == pos;
  }); // return unique classes

  classes = classes
    .map((className) => {
      var index = classes.indexOf(className);
      const classTemplate = `.${className} {

}

`;

      styles = styles.concat(classTemplate);
    })
    .join("");

    console.log(classes);

  if (!fs.existsSync(`${dir}/${componentName}/styles.sass`)) {
    fs.writeFile(`${dir}/${componentName}/styles.sass`, styles, (error) => {
      if (error) {
        console.warn(error);
      }

      console.log(
        "\x1b[32m%s\x1b[0m",
        `Generated CSS for ${componentName} component`
      );
    });
  }
});
