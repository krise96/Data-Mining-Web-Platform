const express = require('express');
const path = require('path');
const open = require('open');
const bodyParser = require('body-parser');

const port = Number(process.env.PORT || 8000);
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

app.listen(port, (err) => {
  if(err) {
    console.log('something terrible just happened');
  } else {
    console.log(`Server is listening on port ${port}`);
    open('http://localhost:' + port);
  }
})