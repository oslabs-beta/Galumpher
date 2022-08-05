const express = require('express');

const router = express.Router();

const dbController = require('../controllers/dbController.js');

// route for posting data to database
router.post('/insertData', dbController.insertData, (req, res) => {
  return res.status(200).json('Data successfully inserted');
});

// route for creating new table
router.post('/', dbController.createTable, (req, res) => {
  return res.status(200).json('Database intialized successfully');
});

// route for getting data from the database
router.get('/', dbController.getData, (req, res) => {
  return res.status(200).json(res.locals.data);
});


module.exports = router;