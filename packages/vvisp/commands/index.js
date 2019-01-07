const abiToScript = require('./abi-to-script.js');
const compile = require('./compile');
const deployContract = require('./deploy-contract');
const deployService = require('./deploy-service');
const init = require('./init');
const flatten = require('./flatten');
const execute = require('./execute');

module.exports = [
  abiToScript,
  compile,
  deployContract,
  deployService,
  init,
  flatten,
  execute
];
