import {_, it} from 'param.macro';
import chalk from 'chalk';

// simple logger
const log = (..._arg) => {
  return console.log(chalk.grey(..._arg));
};

log(chalk.blue('index file starts...'));
