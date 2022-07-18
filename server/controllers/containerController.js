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
        res.locals.containers = stdout;
        next();
      }
    });
  },
};
