import React from 'react';
import Base from './Base';

class Bases extends React.Component {
  constructor(props) {
    super(props);
    this.state = {number: 0};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(number) {
    this.setState({number});
  }

  render() {
    const bases = [];
    for (let base = 2; base <= 16; base++) {
      bases.push(
        <Base
          number={this.state.number}
          onChange={this.handleChange}
          base={base}
          key={base}
        />
      );
    }
    return <div>{bases}</div>;
  }
}
export default Bases;
