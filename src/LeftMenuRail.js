import React from 'react';
import './LeftMenuRail.css';
import Menu from './Menu';
import MenuItem from './MenuItem';

class LeftMenuRail extends React.Component{
  
  render() {
    const collapsed = !!this.props.collapsed;
    var classes = "leftMenuRail";
    if (collapsed) classes = classes + " leftMenuRail-collapsed";

    return (
      <div className={classes}>
        <MenuItem title="Home" icon="home"></MenuItem>
        <MenuItem title="Workflows" icon="bell"></MenuItem>
        <Menu title="Unified Profile"></Menu>
        <MenuItem title="Workflows" icon="search"></MenuItem>
      </div>
  )}
}

export default LeftMenuRail;
