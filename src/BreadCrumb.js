import React from 'react';
import './BreadCrumb.css';

class BreadCrumb extends React.Component{
  
  render() {

    const items = [];
    if (this.props.items) {
      for (var i=0; i<this.props.items.length; i++) {
        const item = this.props.items[i];
        var classes = "breadCrumb-item";
        if (i == this.props.items.length - 1)
          classes = classes + " breadCrumb-item-last";
        if (i > 0)
          items.push(<div className="breadCrumb-separator">&gt;</div>);
        items.push(<div className={classes}><a href="#">{item}</a></div>);
      }
    }

    return (<div className="breadCrumb">
      {items}
    </div>);
  }
}

export default BreadCrumb;
