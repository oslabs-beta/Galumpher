// for the shell commands being ran
const { exec } = require('node:child_process');

// Error object for exec command methods
const { createError } = require('../errorObjs/serverExecErrs');
// Parser for the stats metrics
const { parseStats } = require('../helperFuncs/helpers');


module.exports = {

  getContainers: (req, res, next) => {
    exec('podman ps --format "{{json .}}"', { windowsHide: true }, (error, stdout, stderr) => {
      if (error) {
        // console.log(error);
      }
      if (stderr) {
        next(createError(stderr, 'containerController.getContainers'));
      } 
      else {
        console.log('executed containerController.getContainers');
        const result = JSON.parse(stdout);
        res.locals.containers = result.map((container) => {
          return { name: container.Names[0] };
        });
        next();
      }
    });
  },

  getStats: (req, res, next) => {

    // console.log(req.params);

    const { container_name } = req.params;
    
    console.log('container name from containerController: ', container_name);

    exec(`podman stats ${container_name} --no-stream --format "{{json .}}"`, { windowsHide: true }, (error, stdout, stderr) => {
      if (error) {
        // console.log(error);
      }
      if (stderr) {
        next(createError(stderr, 'containerController.getStats'));
      } 
      else {
        console.log('executed containerController.getStats');
        const metrics = parseStats(JSON.parse(stdout));
        
        console.log('metrics from getStats middleware', metrics);
        res.locals.metrics = metrics;
        next();
      }
    });
  }
};
