const express = require('express');
const router = express.Router();

const containerController = require('../controllers/containerController');
const dbController = require('../controllers/dbController');

// route to serve get requests for stats by container name
router.get('/stats/:container_name', containerController.getStats, dbController.insertData, dbController.getData, (req, res) => {
  return res.status(200).json(res.locals.data);
});
// route to serve get requests for containers
router.get('/', containerController.getContainers, (req, res) => {
  return res.status(200).json(res.locals.containers);
});


module.exports = router;