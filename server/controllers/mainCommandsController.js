// for the shell commands being ran
const { exec } = require('node:child_process');
// Error object for exec command methods
const { createError } = require('../errorObjs/serverExecErrs');


module.exports = {
  start: (req, res, next) => {
    exec('podman machine start', { windowsHide: true }, (error, stdout, stderr) => {
      if (error) {
        // console.log(error);
      }
      if (stderr) {
        return  next(createError(stderr, 'mainCommandController.start'));
      }
      else {
        console.log('executed mainCommandsController.start');
        res.locals.start = stdout;
        return next();
      }
    });
  },

  stop: (req, res, next) => {
    exec('podman machine stop', { windowsHide: true }, (error, stdout, stderr) => {
      // if (error) {
      //   console.log(error);
      // } 
      if (stderr) {
        return next(createError(stderr, 'mainCommandController.stop'));
      } 
      else {
        console.log('executed mainCommandsController.stop');
        res.locals.stop = stdout;
        return next();
      }
    });
  }
};