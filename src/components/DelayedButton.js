import React from 'react';

export default class DelayedButton extends React.Component {
  constructor() {
    super();
    
    this.setTimeout = this.setTimeout.bind(this);
  }
  
  handleEvent(event) {
    event.persist();
    
  }
  
  render() {
    return(
      <button onClick={this.handleEvent}>Delay</button>);
  }
  
}