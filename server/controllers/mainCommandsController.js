// for the shell commands being ran
const { exec } = require('node:child_process');
const { stderr } = require('node:process');
// const { stdout } = require('node:process');
// const { stdout, stderr } = require('process');

module.exports = {
  start: (req, res, next) => {
    exec('podman machine start', {windowsHide: true}, (error, stdout) => {
      if (error) next(error);
      if (stderr) next(stderr)
      else {
        console.log('executed mainCommandsController.start');
        res.locals.out = stdout;
        next();
      }
    });

  },

  stop: (req, res, next) => {
    exec('podman machine stop --format "{{json .}}"', {windowsHide: true}, (error, stdout) => {
      if (error) next(error);
      if (stderr) next(stderr);
      else {
        console.log('executed mainCommandsController.stop');
        res.locals.stop = stdout;
        next();
      }
    });
  }
};