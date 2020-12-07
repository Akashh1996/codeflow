/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Question = require('./src/models/questionsModel');
const Answer = require('./src/models/answerModel');
const User = require('./src/models/userModel');
const questionsRouter = require('./src/routers/questionsRouter')(Question, Answer);
const answerRouter = require('./src/routers/answerRouter')(Answer);
const userRouter = require('./src/routers/userRouter')(User);

const app = express();
app.use(cors());
const port = process.env.PORT || 8000;
const URLDB = 'mongodb://localhost/codeflowdb';

mongoose.connect(URLDB, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/questions', questionsRouter);
app.use('/answers', answerRouter);
app.use('/user', userRouter);

app.listen(port, () => {
  debug(`server is running on port ${chalk.blue(port)}`);
});
