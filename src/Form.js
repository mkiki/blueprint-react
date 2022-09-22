import React from 'react';
import './Form.css';

class Form extends React.Component{
  
  render() {
    return (
      <div className="form">
        <form>
          {this.props.children}
        </form>
      </div>
  )}
}

export default Form;
