import React from 'react';

class Test extends React.Component {
  render() {
    // Event Handle
    const form = (e) => this.props.change(e.target.value);
    const submit = () => this.props.submit(this.props.store.value);

    return (
      <React.Fragment>
        <h1>{this.props.store.title}</h1>
        <p>{this.props.store.subtitle}</p>
        <br />
        <br />
        <h2>{this.props.store.formtitle}</h2>
        <input type="text" onChange={form} />
        <input type="submit" value="UPCASE" onClick={submit} />
        <br />
        <br />
        <p>TYPING : {this.props.store.value}</p>
        <p>UPCASE : {this.props.store.revalue}</p>
      </React.Fragment>
    );
  }
}

export default Test;