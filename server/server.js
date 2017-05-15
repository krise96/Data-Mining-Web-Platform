const express = require('express');
const path = require('path');
const open = require('open');
const bodyParser = require('body-parser');
const logger = require('morgan');

require('./db/config');
require('./db/models/user');
require('./db/models/file');
require('./db/models/task');
require('./db/models/taskList');

const routes = require('./routes/routes');

const port = Number(process.env.PORT || 8000);
const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));

app.use('/api', routes);

app.listen(port, (err) => {
  if(err) {
    console.log('something terrible just happened');
  } else {
    console.log(`Server is listening on port ${port}`);
    // open('http://localhost:' + port);
  }
})