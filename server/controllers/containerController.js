// for the shell commands being ran
const { exec } = require('node:child_process');
// const { stdout, stderr } = require('process');


module.exports = {

  getContainers: (req, res, next) => {
    exec('podman ps -a --format "{{json .}}"', {windowsHide: true}, (error, stdout, stderr) => {
      if (error) next(error);
      if (stderr) next(stderr);
      else {
        console.log('executed containerController.getContainers');
        const result = JSON.parse(stdout);
        res.locals.containers = result[0];
        next();
      }
    });
  },

  getStats: (req, res, next) => {
    exec('podman stats --no-stream --format "{{json .}}"', {windowsHide: true}, (error, stdout, stderr) => {
      if (error) next(error);
      if (stderr) next(error);
      else {
        console.log('executed contaienerController.getStats');
        const metrics = JSON.parse(stdout);
        res.locals.metrics = metrics;
        next();
      }
    });
  }
};
