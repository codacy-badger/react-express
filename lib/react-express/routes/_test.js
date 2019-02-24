import Express from 'express';
const Server = Express();

/**
 *  Backend Express
 **/
Server.post('/', (req, res, next) => {
  let type = req.body.params.type;
  let upcase = type.toUpperCase();
  res.send(upcase);
});

export default Server;