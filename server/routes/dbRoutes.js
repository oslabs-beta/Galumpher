const express = require('express');

const router = express.Router();

const dbController = require('../controllers/dbController.js');

router.post('/insertData', dbController.insertData, (req, res) => {
  return res.status(200).json('insertData works');
});

router.post('/', dbController.createTable, (req, res) => {
  return res.status(200).json('Database intialized successfully');
});


router.get('/', dbController.getData, (req, res) => {
  return res.status(200).json('getData works');
});


module.exports = router;