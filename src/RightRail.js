import React from 'react';
import './RightRail.css';
import TextArea from './TextArea';
import TextField from './TextField';
import Form from './Form';

class RightRail extends React.Component{
  
  render() {
    return (
      <div className="rightRail">
        <Form>
          <TextField label="Test"></TextField>
          <TextArea label="Comment"></TextArea>
        </Form>
      </div>
  )}
}

export default RightRail;
