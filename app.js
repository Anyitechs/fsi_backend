import dotenv from 'dotenv';
import express from 'express';
import logger from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

import apiRoutes from './src/routes/index.js';

dotenv.config();
const app = express();

app.use(helmet())
  .disable('x-powered-by')
  .use(cors())
  .use(logger('dev'))
  .use(express.json())
  .use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Welcome to FSI HMO Backend 👨🏽‍💻')
})

app.use('/api/v1/', apiRoutes);
app.all('*', (req, res) => {
  res.status(404).send('Invalid Route');
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(req.status || 500).send({
    status: "Error",
    message: err.message
  });
});

export default app;
