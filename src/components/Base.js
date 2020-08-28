import React from 'react';
const isValid = function(number, base) {
  return number % 10 < base;
};

class Base extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const {number, base} = this.props;
    const value = +event.target.value;
    const newValue = isValid(value, base) ? parseInt(value, base) : number;
    this.props.onChange(newValue);
  }

  render() {
    const {number, base} = this.props;
    return (
      <div>
        <label>Base {base}</label>
        <input value={number.toString(base)} onChange={this.handleChange} />
      </div>
    );
  }
}

export default Base;
