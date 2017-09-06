const chalk = require('chalk');
 
console.log(chalk.blue('Happy ') + chalk.green.bgRed.bold('Birthday') + chalk.yellow(' to ') + chalk.underline.red('you!'));

console.log(chalk.red('Happy ') + chalk.yellow.bgBlue.bold('Birthday') + chalk.green(' to ') + chalk.underline.blue('you!'));

console.log(chalk.green('Happy ') + chalk.red.bgGreen.bold('Birthday') + chalk.blue(' dear ') + chalk.underline.yellow('Mr. E!'));

console.log(chalk.yellow('Happy ') + chalk.blue.bgYellow.bold('Birthday') + chalk.red(' to ') + chalk.underline.green('you!'));

debugger

let a = 25
let b = 4
let c = 5

console.log(a * b / c)