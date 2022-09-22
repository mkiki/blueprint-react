import React from 'react';
import './HeaderBar.css';
import Icon from './Icon';

class HeaderBar extends React.Component{
  
  render() {
    const title = this.props.title || "Untitled";
    const logo = this.props.logo || "anchor";

    return (
      <div className="headerBar">
        <div className="headerBar-left">
          <Icon name={logo} style="inverted"></Icon>
          <h1>{title}</h1>
        </div>
        <div className="headerBar-middle"></div>
        <div className="headerBar-right">
          <span className="headerBar-organisation">Organizarion, Inc</span>
          <div className="headerBar-quickActions">
            <a href="#"><Icon name="search" style="inverted"></Icon></a>
            <a href="#"><Icon name="help" style="inverted"></Icon></a>
            <a href="#"><Icon name="apps" style="inverted"></Icon></a>
            <a href="#"><Icon name="bell" style="inverted"></Icon></a>
            <a href="#"><Icon name="login" style="inverted"></Icon></a>
          </div>
        </div>
      </div>
  )}
}

export default HeaderBar;
