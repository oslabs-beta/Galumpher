const express = require('express');
const router = express.Router();

const commandsController = require('../controllers/mainCommandsController');

router.get('/start', commandsController.start, (req, res) => {
  console.log('made it');
  res.status(200).json(res.locals.out);
});


module.exports = router;