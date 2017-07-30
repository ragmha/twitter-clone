/* eslint-disable no-console  */
import express from 'express';
import bodyParser from 'body-parser';

import './config/db';

const app = express();

const PORT = process.env.PORT || 3003;

app.use(bodyParser.json());

app.listen(PORT, err => {
  if (err) console.error(err);
  else console.log(`App listening on port: ${PORT}`);
});
