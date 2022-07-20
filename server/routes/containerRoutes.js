const express = require('express');
const router = express.Router();

const containerController = require('../controllers/containerController');


router.get('/stats' , containerController.getStats, (req, res) => {
  return res.status(200).json(res.locals.metrics);
});

router.get('/', containerController.getContainers, (req, res) => {
  return res.status(200).json(res.locals.containers);
});


module.exports = router;