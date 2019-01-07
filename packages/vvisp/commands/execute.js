const { execute } = require('../scripts');

const name = 'execute';
const signature = `${name} <file> <function> [arguments...]`; //TODO change signature
const description = `TODO`;

// vvisp execute "filepath" "function" "argument"

const register = commander =>
  commander
    .command(signature, { noHelp: true })
    .usage('<file> <function> [arguments...] [options]')
    .option('-f, --front <name>', 'generate the front-end library')
    .description(description)
    .action(execute);

module.exports = { name, signature, description, register, execute };
