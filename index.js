const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./db/connectBD');
const routes = require('./routes/dataVisualization');
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({ origin: true }));

app.use('/api/data-visualization', routes);

const start = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log('listening on', port);
    });
  } catch (err) {
    console.log(err);
  }
};
start();

app.get('/', (req, res) => {
  res.send('Welcome to visualization database');
});
