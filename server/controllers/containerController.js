// for the shell commands being ran
const { exec } = require('node:child_process');

// Error object for exec command methods
const { createError } = require('../errorObjs/serverExecErrs');
// Parser for the stats metrics
const { parseStats } = require('../helperFuncs/helpers');


module.exports = {
  // middleware to list running Podman containers and get container name
  getContainers: (req, res, next) => {
    exec('podman ps --format "{{json .}}"', { windowsHide: true }, (error, stdout, stderr) => {
      if (error) {
        console.log(error);
      }
      if (stderr) {
        next(createError(stderr, 'containerController.getContainers'));
      } 
      else {
        const result = JSON.parse(stdout);
        res.locals.containers = result.map((container) => {
          return { name: container.Names[0] };
        });
        next();
      }
    });
  },

  // middleware to get stats for unique containers by name from podman
  getStats: (req, res, next) => {

    const { container_name } = req.params;
    
    exec(`podman stats ${container_name} --no-stream --format "{{json .}}"`, { windowsHide: true }, (error, stdout, stderr) => {
      if (error) {
        console.log(error);
      }
      if (stderr) {
        next(createError(stderr, 'containerController.getStats'));
      } 
      else {
        const metrics = parseStats(JSON.parse(stdout));
        res.locals.metrics = metrics;
        next();
      }
    });
  }
};
