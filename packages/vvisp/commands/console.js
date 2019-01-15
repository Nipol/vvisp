const { console } = require('../scripts');

const name = 'console';
const signature = `${name} [script-api-path]`;
const description = 'run interactive shell to execute contract scripts';

const register = commander =>
  commander
    .command(signature, { noHelp: true })
    .usage('[script-api-path]')
    .description(description)
    .action(console);

module.exports = { name, signature, description, register, console };
