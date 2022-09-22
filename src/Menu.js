import React from 'react';
import './Menu.css';

class Menu extends React.Component{
  
  render() {
    return (<div className="menu">{this.props.title}</div>);
  }
}

export default Menu;
