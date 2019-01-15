const abiToScript = require('./abi-to-script');
const compile = require('./compile');
const deployService = require('./deploy-service');
const deployContract = require('./deploy-contract');
const init = require('./init');
const flatten = require('./flatten');
const console = require('./console');

module.exports = {
  abiToScript,
  compile,
  deployService,
  deployContract,
  init,
  flatten,
  console
};
