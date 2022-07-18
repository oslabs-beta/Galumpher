const express = require('express');
const path = require('path');

const app = express();

const PORT = 3333;

app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('/', (req, res) => res
  .status(200)
  .sendFile(path.resolve(__dirname, '../dist/index.html')));

app.use('*', (req, res) => {
  res.status(404);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
