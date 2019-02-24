import Express from 'express';
import Path from 'path';
const Server = Express();

// SSR React Path
import Index from './routes/index';
import Test from './routes/test';

// Express Path
import _Test from './routes/_test';

// SSR React Route
Server.use('/', Index);
Server.use('/', Express.static(Path.join(__dirname, 'public')));
Server.use('/test', Test);
Server.use('/test', Express.static(Path.join(__dirname, 'public')));

// Express Route
Server.use('/_test', _Test);

export default Server;