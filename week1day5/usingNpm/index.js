var chalk = require("chalk");

var message = chalk.green("Hello " + chalk.blue.bgRed.bold("Planet") + chalk.blue.underline.bold("Earth"));
console.log(message);