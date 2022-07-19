const express = require('express');
const router = express.Router();

const commandsController = require('../controllers/mainCommandsController');

router.get('/start', commandsController.start, (req, res) => {
  res.status(200).json(res.locals.start);
});

router.get('/stop', commandsController.stop, (req, res) => {
  res.status(200).json(res.locals.stop);
});


module.exports = router;