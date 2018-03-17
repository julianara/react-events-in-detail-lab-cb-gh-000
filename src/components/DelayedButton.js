import React from 'react';

export default class DelayedButton extends React.Component {
  constructor() {
    super();
    
    this.setTimeout = this.setTimeout.bind(this);
  }
  
  handleEvent(event) {
    
  }
  
  render() {
    return(
      <button onClick={this.handleEvent}>Delay</button>);
  }
  
}