import React from 'react';

class Index extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>{this.props.store.title}</h1>
        <p>{this.props.store.subtitle}</p>
      </React.Fragment>
    );
  }
}

export default Index;