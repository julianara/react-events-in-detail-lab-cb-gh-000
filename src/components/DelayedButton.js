import React from 'react';

export default class DelayedButton extends React.Component {
  constructor() {
    super();
    
    this.handleEvent = this.handleEvent.bind(this);
  }
  
  handleEvent(event) {
    event.persist();
    setTimeout (() =? {
      
    });
    
  }
  
  render() {
    return(
      <button onClick={this.handleEvent}>Delay</button>);
  }
  
}