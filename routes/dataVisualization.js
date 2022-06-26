const express = require('express');
const router = express.Router();
const { allData } = require('../controls/dataVisualization');

router.route('/').get(allData);

module.exports = router;
