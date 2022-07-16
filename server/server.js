const express = require('express');
const path = require('path');

const app = express();
const PORT = 3333;

// for the shell commands being ran
const { exec } = require('node:child_process');
// const { stdout, stderr } = require('process');

app.use(express.json())


app.use(express.static(path.resolve(__dirname, '../build')));

app.get('/containers', (req, res) => {
  exec('podman ps -a --format "{{json .}}"', {windowsHide: true}, (error, stdout, stderr) => {
    if (error) console.log('ERROR:', error);
    else {
      console.log('STDOUT:', stdout, 'STDERR:', stderr)
      return res.status(200).send(stdout)
    }
  })
})

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, '../build/index.html'));
});

app.use('*', (req, res) => {
  res.status(404);
});

app.use((err, req, res) => {
  const defaultErr = {
    log: 'Error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occured' }
  }
  const errorObj = Object.assign(defaultErr, err)
  return res.status((errorObj.status)).json(errorObj.message)
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
