import Express from 'express';
import Compression from 'compression';
import Logger from 'morgan';
import BodyParser from 'body-parser';
import Favicon from 'serve-Favicon';
import Routes from './routes';
import Http from 'http';
const Server = Express();

// Setting
Server.use(Compression({ level: 9 }));
Server.use(Logger('dev'));
Server.use(BodyParser.json());
Server.use(BodyParser.urlencoded({ extended: true }));
Server.use(Favicon(__dirname + '/public/images/Favicon.ico'));
Server.use(Routes);

// Handle page
Server.use((req, res, next) => {
  res.status(404);
});
Server.use((req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.server.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
});

// Server start
Http.createServer(Server).listen(3000);

export default Server;