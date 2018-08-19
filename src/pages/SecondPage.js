import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export class SecondPage extends Component {
  render() {
    const options = [
      { value: 'one', label: 'One' },
      { value: 'two', label: 'Two', className: 'myOptionClassName' },
    ];
    const defaultOption = options[0];
    return (
      <div>
        <Dropdown options={options}
          onChange={
            this._onSelect
          }
          value={
            defaultOption
          }
          placeholder="Select an option" />
      </div>
    );
  }
}

export default SecondPage;