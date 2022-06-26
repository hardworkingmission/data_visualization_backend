const DataVisalization = require('../models/DataVisualization');

const allData = async (req, res) => {
  const result = await DataVisalization.find({});
  res.send(result);
};

module.exports = {
  allData,
};
