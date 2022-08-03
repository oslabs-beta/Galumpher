const express = require('express');
const router = express.Router();

const containerController = require('../controllers/containerController');
const dbController = require('../controllers/dbController');


router.get('/stats/:container_name', containerController.getStats, dbController.insertData, dbController.getData, (req, res) => {
  return res.status(200).json(res.locals.data);
});

router.get('/', containerController.getContainers, (req, res) => {
  return res.status(200).json(res.locals.containers);
});


module.exports = router;