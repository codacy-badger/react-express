import React from "react";
import { StaticRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import createStore from './../../vendors/redux/createStore';
const store = createStore();

import Index from './../../vendors/redux/containers/index';
import Test from './../../vendors/redux/containers/test';

class Router extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Compoents = () => {
      switch (this.props.url) {
        //------ ROUTER ------>
        case '/':
          return <Index />;
        case '/test':
          return <Test />;
        //-------------------->
      }
    }

    return (
      <Provider store={store}>
        <StaticRouter location={this.props.url} context={{}}>
          {Compoents()}
        </StaticRouter>
      </Provider>
    );
  }
}

export default Router;