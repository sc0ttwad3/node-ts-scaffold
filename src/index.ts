// import {_, it} from 'param.macro';
import chalk from 'chalk';

// simple logger
const log = (..._arg) => {
  return console.log(chalk.grey(..._arg));
};

log(chalk.blue('main index file starts...'));
log(chalk.blue('from transpiled TypeScript 3.x code into es6.'));
