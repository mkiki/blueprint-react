import React from 'react';
import Icon from './Icon';
import './MenuItem.css';

class MenuItem extends React.Component{
  
  render() {
    var icon = undefined;
    if (this.props.icon) {
      icon = <Icon name={this.props.icon}></Icon>;
    }
    return (<div className="menuItem">{icon}<a href="#" className="menutItem-title">{this.props.title}</a></div>);
  }

}

export default MenuItem;
