'use strict';

// NOTE: the following code was partially adopted from https://github.com/iarna/in-publish
module.exports = function getNpmArgs() {
  let npmArgv = null;

  try {
    npmArgv = JSON.parse(process.env.npm_config_argv);
  } catch (err) {
    return null;
  }

  if (typeof npmArgv !== 'object' || !npmArgv.original || !Array.isArray(npmArgv.original)) {
    return null;
  }

  return npmArgv.original;
};