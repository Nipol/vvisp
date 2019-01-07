module.exports = async function(filePath, functions, args, options) {
  const path = require('path');
  const fs = require('fs-extra');

  console.log(filePath);
  console.log(functions);
  console.log(args);
};
