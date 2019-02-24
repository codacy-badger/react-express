import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import createStore from './../vendors/redux/createStore';
const store = createStore();

import Index from './../vendors/redux/containers/index';
import Test from './../vendors/redux/containers/test';

class Router extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Index} />
            <Route exact path='/test' component={Test} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Router;