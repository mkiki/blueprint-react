import React from 'react';
import './Shell.css';
import HeaderBar from './HeaderBar';
import LeftMenuRail from './LeftMenuRail';
import Content from './Content';
import BreadCrumb from './BreadCrumb';
import RightRail from './RightRail';

class Shell extends React.Component{
  
  render() {

    return (
      <div className="shell">
        {this.props.children}
      </div>
  )}
}

class ShellBody extends React.Component{
  
  render() {

    return (
      <div className="shell-body">
        {this.props.children}
      </div>
  )}
}

export { Shell };
export { ShellBody };

/*
        <HeaderBar title={this.props.title} logo={this.props.logo}></HeaderBar>
        <div className="shell-body">
          <LeftMenuRail collapsed={false}></LeftMenuRail>
          <Content>
            <BreadCrumb items={[ "Audiences", "Add new audience source" ]}></BreadCrumb>
            <RightRail></RightRail>
          </Content>
        </div>
        */