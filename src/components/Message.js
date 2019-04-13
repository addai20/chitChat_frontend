import React, { Component } from 'react';

class Message extends Component {

  render(){
    console.log(this.props);
    return(
      <div >
        <button onClick={(e)=>this.props.deleteMessage(e)}>x</button>
        <p>{this.props.sender}</p> <p>{this.props.text}</p>
      </div>
    )
  }
}

export default Message

//
// <div className="message">
//   <button onClick={(e)=>this.props.deleteMessage(e)}>x</button>
//   <p>{this.props.sender}</p> <p>{this.props.text}</p>
// </div>
