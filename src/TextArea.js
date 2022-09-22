import React from 'react';
import './TextArea.css';
import './Form.css';

class TextArea extends React.Component{
  
  render() {
    return (
      <div className="textArea field">
        <label>{this.props.label}</label>
        <textarea></textarea>
      </div>
  )}
}

export default TextArea;
