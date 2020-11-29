const express = require('express');
const cors = require('cors');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Question = require('./src/models/questionModel');
const questionRouter = require('./src/routers/questionRouter')(Question);

const app = express();
app.use(cors());
const port = process.env.PORT || 8000;

mongoose.connect('mongodb://localhost/codeflow');

app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', questionRouter);

app.listen(port, () => {
  debug(`server is running on port ${chalk.blue(port)}`);
});
