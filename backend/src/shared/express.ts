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
}

export function useServerErrorHandling(app: Application) {
  // Catch 404 and forward to error handler
  app.use(function (req, res, next) {
    res.status(404).json({ error: 'Not Found' });
  });

  // Error handler
  app.use(function (err, req, res, next) {
    // Set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // Render the error page
    res.status(err.statusCode || 500);
    res.json({ error: err.message });
  });
}
