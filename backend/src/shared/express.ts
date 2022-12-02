import createError from 'http-errors';
import express, { Application } from 'express';
import 'express-async-errors';
import logger from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

export function useServerConfigurations(app: Application) {
  app.use(logger('dev'));
  app.use(express.json());
  app.use(cors());
  app.use(helmet());
  app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
  app.use(express.urlencoded({ extended: false }));
}

export function useServerErrorHandling(app: Application) {
  // catch 404 and forward to error handler
  app.use(function (req, res, next) {
    next(createError(404, 'Not Found'));
  });

  // error handler
  app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.statusCode || 500);
    res.json({ error: err.message });
  });
}
