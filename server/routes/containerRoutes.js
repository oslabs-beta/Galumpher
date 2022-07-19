const express = require('express');
const router = express.Router();

const containerController = require('../controllers/containerController');




router.get('/containers', containerController.getContainers, (req, res) => {
  return res.status.json(res.locals).containers;
});

module.exports = router;