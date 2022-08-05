const express = require('express');
const router = express.Router();

const commandsController = require('../controllers/mainCommandsController');

// route for starting Podman
router.get('/start', commandsController.start, (req, res) => {
  res.status(200).json(res.locals.start);
});

// route for stopping Podman
router.get('/stop', commandsController.stop, (req, res) => {
  res.status(200).json(res.locals.stop);
});


module.exports = router;