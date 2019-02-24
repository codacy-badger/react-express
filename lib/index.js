const Commander = require('commander');
const CurrentDir = require('current-dir');
const FileSystem = require('file-system');

/**
 * packeage.json
 */
let packageJSON = {
  "name": "@react-express/core",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "build-css": "node-sass vendors/scss/style.scss public/stylesheets/client.min.css --output-style compressed",
    "debug-css": "node-sass vendors/scss/style.scss public/stylesheets/client.min.css --output-style nested --indent-width 2 -w",
    "start": "npm run build-css && webpack -p && babel-node server.js",
    "debug": "node-sass vendors/scss/style.scss public/stylesheets/client.min.css --output-style nested --indent-width 2 && concurrently \"npm run debug-css\" \"webpack -d --watch\" \"nodemon --exec babel-node server.js\" "
  },
  "dependencies": {
    "@babel/cli": "7.x.x",
    "@babel/core": "7.x.x",
    "@babel/node": "7.x.x",
    "@babel/plugin-proposal-class-properties": "7.x.x",
    "@babel/plugin-transform-react-jsx": "7.x.x",
    "@babel/preset-env": "7.x.x",
    "@babel/preset-react": "7.x.x",
    "babel-loader": "8.x.x",
    "body-parser": "1.x.x",
    "compression": "1.x.x",
    "concurrently": "4.x.x",
    "express": "4.x.x",
    "morgan": "1.x.x",
    "node-jsx": "0.x.x",
    "node-sass": "4.x.x",
    "nodemon": "1.x.x",
    "react": "16.x.x",
    "react-dom": "16.x.x",
    "react-router-dom": "4.x.x",
    "react-redux": "6.x.x",
    "redux-thunk": "2.x.x",
    "redux": "4.x.x",
    "serve-favicon": "2.x.x",
    "webpack": "4.x.x",
    "webpack-cli": "3.x.x"
  },
  "devDependencies": {
    "axios": "0.x.x"
  }
};

const makeApplication = () => {
  Commander
    .option('-r, --route [routeName]', 'route')
    .option('-b, --backend [backendName]', 'backend')
    .parse(process.argv);

  if (Commander.route) {
    createRoute(Commander.route);
  } else if (Commander.backend) {
    createBackend(Commander.backend);
  } else {
    createReactExpress(packageJSON);
  }
}

/**
 * React-Express
 */
const createReactExpress = (packageJSON) => {

  console.log('\nCreate React-Express...\n');
  FileSystem.writeFile(CurrentDir() + '/package.json', JSON.stringify(packageJSON, null, 2), (err) => {
    if (err) {
      console.log('Error: File is not create /package.json');
    } else {
      let dir = __dirname + '/react-express';
      let current = CurrentDir();
      FileSystem.copySync(dir, current);
      console.log('Finish create React-Express !\n');
      console.log('First is npm install');
      console.log('After that, opening in the WEB Browser localhost:3000\n');
    }
  });
}

let capitalize = (str) => {
  if (!str || typeof str !== 'string') return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

/**
 * Route
 */
const createRoute = (route) => {

  console.log('\nAdd Route...\n');
  // react
  let data = "import React from 'react';\n"
    + "\n"
    + "class " + capitalize(route) + " extends React.Component {\n"
    + "  render() {\n"
    + "    return (\n"
    + "      <React.Fragment>\n"
    + "        <h1>{this.props.store.title}</h1>\n"
    + "        <p>{this.props.store.subtitle}</p>\n"
    + "      </React.Fragment>\n"
    + "    );\n"
    + "  }\n"
    + "}\n"
    + "\n"
    + "export default " + capitalize(route) + ";";

  let fileName = route + '.jsx';
  FileSystem.writeFile('./views/' + route + '/' + fileName, data, (err) => {

    console.log('Finish create ./views/' + route + '/' + fileName + ' !');
    FileSystem.readFile('./views/router.jsx', 'utf-8', (err, file) => {

      let updateData = routerJSX(file, route);
      FileSystem.writeFile('./views/router.jsx', updateData, (err) => {

        console.log('Finish update ./views/router.jsx !');
        FileSystem.readFile('./routes.js', 'utf-8', (err, file) => {

          updateData = routes(file, route);
          FileSystem.writeFile('./routes.js', updateData, (err) => {

            console.log('Finish update ./routes.js !');
            // route
            data = "import Express from 'express';\n"
              + "import React from 'react';\n"
              + "import ReactDomServer from 'react-dom/server';\n"
              + "import Router from './temp/router.jsx';\n"
              + "import Template from './temp/template';\n"
              + "const Server = Express();\n"
              + "\n"
              + "/**\n"
              + " *  Server Side Rendering\n"
              + " **/\n"
              + "Server.get('/', (req, res) => {\n"
              + "  require('node-jsx').install({ harmony: true });\n"
              + "  const html = ReactDomServer.renderToString(React.createElement(Router, { url: '/" + route + "' }));\n"
              + "  const view = Template(html);\n"
              + "  res.send(view);\n"
              + "});\n"
              + "\n"
              + "export default Server;";

            fileName = route + ".js";
            FileSystem.writeFile('./routes/' + fileName, data, (err) => {

              console.log('Finish create ./routes/' + fileName + ' !');
              FileSystem.readFile('./routes/temp/router.jsx', 'utf-8', (err, file2) => {

                updateData = routerJSX2(file2, route);
                FileSystem.writeFile('./routes/temp/router.jsx', updateData, (err) => {

                  console.log('Finish update ./routes/temp/router.jsx !');
                  // container
                  data = "import { connect } from 'react-redux';\n"
                    + "import " + capitalize(route) + " from './../../../views/" + route + "/" + route + ".jsx';\n"
                    + "\n"
                    + "const mapStateToProps = (store) => {\n"
                    + "  return {\n"
                    + "    store: store." + route + "Reducer,\n"
                    + "  }\n"
                    + "}\n"
                    + "\n"
                    + "export default connect(\n"
                    + "  mapStateToProps\n"
                    + ")(" + capitalize(route) + ");\n";

                  fileName = route + ".js";
                  FileSystem.writeFile('./vendors/redux/containers/' + fileName, data, (err) => {

                    console.log('Finish create ./vendors/redux/containers/' + fileName + ' !');
                    // reducer
                    data = "const initialState = {\n"
                      + "  title: 'React-Express " + capitalize(route) + " Page !!',\n"
                      + "  subtitle: 'State management using Redux.'\n"
                      + "}\n"
                      + "\n"
                      + "export const " + route + "Reducer = (state = initialState, action) => {\n"
                      + "  switch (action.type) {\n"
                      + "    default:\n"
                      + "      return state;\n"
                      + "  }\n"
                      + "}\n";

                    FileSystem.writeFile('./vendors/redux/reducers/' + fileName, data, (err) => {

                      console.log('Finish create ./vendors/redux/reducers/' + fileName + ' !');
                      FileSystem.readFile('./vendors/redux/createStore.js', 'utf-8', (err, file3) => {

                        updateData = createStore(file3, route);
                        FileSystem.writeFile('./vendors/redux/createStore.js', updateData, (err) => {

                          console.log('Finish update ./vendors/redux/createStore.js !');
                          console.log('\nEnd Add Route.\n');
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
}

let routerJSX = (file, route) => {
  // import
  let add = "import " + capitalize(route) + " from './../vendors/redux/containers/" + route + "';\r\n";
  let location = file.search('\r\nclass Router extends React.Component {');
  let update = [file.slice(0, location), add, file.slice(location)].join('');
  // <Route>
  add = "            <Route exact path='/" + route + "' component={" + capitalize(route) + "} />\n";
  location = update.search('          </Switch>');
  update = [update.slice(0, location), add, update.slice(location)].join('');

  return update;
}

let routes = (file, route) => {
  // import
  let add = "import " + capitalize(route) + " from './routes/" + route + "';\r\n";
  let location = file.search('\r\n// Express Path');
  let update = [file.slice(0, location), add, file.slice(location)].join('');
  // Server.use
  add = "Server.use('/" + route + "', " + capitalize(route) + ");\nServer.use('/" + route + "', Express.static(Path.join(__dirname, 'public')));\r\n";
  location = update.search('\r\n// Express Route');
  update = [update.slice(0, location), add, update.slice(location)].join('');

  return update;
}

let routerJSX2 = (file, route) => {
  // import
  let add = "import " + capitalize(route) + " from './../../vendors/redux/containers/" + route + "';\r\n";
  let location = file.search('\r\nclass Router extends React.Component {');
  let update = [file.slice(0, location), add, file.slice(location)].join('');
  // route
  add = "        case '/" + route + "':\n          return <" + capitalize(route) + " />;\n";
  location = update.search('        //-------------------->');
  update = [update.slice(0, location), add, update.slice(location)].join('');

  return update;
}

let createStore = (file, route) => {
  // import
  let add = "import { " + route + "Reducer } from './reducers/" + route + "';\r\n";
  let location = file.search('\r\n// ReduxStore');
  let update = [file.slice(0, location), add, file.slice(location)].join('');
  // Reducer
  add = "      " + route + "Reducer,\n";
  location = update.search('      //---------------->');
  update = [update.slice(0, location), add, update.slice(location)].join('');

  return update;
}

/**
 * Backend
 */
const createBackend = (backend) => {

  console.log('\nAdd Backend Express...\n');
  // Backend
  let data = "import Express from 'express';\n"
    + "const Server = Express();\n"
    + "\n"
    + "/**\n"
    + " *  Backend Express\n"
    + " **/\n"
    + "Server.post('/', (req, res, next) => {\n"
    + "  res.send({});\n"
    + "});\n"
    + "\n"
    + "export default Server;";

  let fileName = "_" + backend + '.js';
  FileSystem.writeFile('./routes/' + fileName, data, (err) => {

    console.log('Finish create ./routes/' + fileName + ' !');
    FileSystem.readFile('./routes.js', 'utf-8', (err, file) => {

      let updateData = routesJS(file, backend);
      FileSystem.writeFile('./routes.js', updateData, (err) => {
        console.log('Finish update ./routes.js !');
        console.log('\nEnd Add Backend Express.\n');
      })
    });
  });
}

let routesJS = (file, backend) => {
  // import
  let add = "import _" + capitalize(backend) + " from './routes/_" + backend + "';\r\n";
  let location = file.search('\r\n// SSR React Route');
  let update = [file.slice(0, location), add, file.slice(location)].join('');
  // Reducer
  add = "Server.use('/_" + backend + "', _" + capitalize(backend) + ");\r\n";
  location = update.search('\r\nexport default Server;');
  update = [update.slice(0, location), add, update.slice(location)].join('');

  return update;
}

exports.makeApplication = makeApplication;