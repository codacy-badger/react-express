import Express from 'express';
import React from 'react';
import ReactDomServer from 'react-dom/server';
import Router from './temp/router.jsx';
import Template from './temp/template';
const Server = Express();

/**
 *  Server Side Rendering
 **/
Server.get('/', (req, res) => {
  require('node-jsx').install({ harmony: true });
  const html = ReactDomServer.renderToString(React.createElement(Router, { url: '/' }));
  const view = Template(html);
  res.send(view);
});

export default Server;