import React from 'react';
import './TextField.css';
import './Form.css';

class TextField extends React.Component{
  
  render() {
    return (
      <div className="textField field">
        <label>{this.props.label}</label>
        <input type="text"></input>
      </div>
  )}
}

export default TextField;
