import React from 'react';
import injectSheet from 'react-jss';

import Classes from '../../styles';
import Divider from '../divider';

class Counter extends React.Component {
  constructor({ classes }) {
    super();
    this.state = {
      count: 0,
    };
  }

  getCount() {
    return this.state.count;
  }

  upCount() {
    this.setState({ count: this.state.count + 1 });
  }

  downCount() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div>
        <h1>Counter Class</h1>

        <button onClick={() => this.upCount()}>+</button>
        <span>{this.getCount()}</span>
        <button onClick={() => this.downCount()}>-</button>

        <Divider />
      </div>
    );
  }
}

export default injectSheet(Classes)(Counter);
