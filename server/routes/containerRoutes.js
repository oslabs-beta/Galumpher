const express = require('express');
const router = express.Router();

const containerController = require('../controllers/containerController');


// for the shell commands being ran
const { exec } = require('node:child_process');
// const { stdout, stderr } = require('process');



router.get('/containers', containerController.getContainers, (req, res) => {
  res.status.json(res.locals);
});
