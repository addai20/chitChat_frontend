import React, { Component } from 'react';
import Message from '../components/Message'

class MessagesBox extends Component {
  render(){
    console.log(this.props);
    return(
      <div className="messagesBox">
        {this.props.selectedUser.id ? this.props.messages.map((msg)=>{
          return (
            this.props.currentUser.id === msg.sender_id ?

            <div className="container">
              <img src="http://icons.iconarchive.com/icons/papirus-team/papirus-status/64/avatar-default-icon.png" alt="Avatar"/>
              <p>{msg.text_body}</p>
              <span className="time-right">11:00</span>
            </div>

          :

          <div className="container darker">
            <img src="http://icons.iconarchive.com/icons/papirus-team/papirus-status/64/avatar-default-icon.png" alt="Avatar"/>
            <p>{msg.text_body}</p>
            <span className="time-right">11:00</span>
          </div>

        )

      })
    : null}
      </div>
    )
  }
}

export default MessagesBox

// MESSAGE COMING FROM CURRENTLY LOGGED IN USER

// <Message
//   className="messageSent"
//   key={msg.id}
//   sender={msg.sender_id}
//   receiver={msg.receiver_id}
//   text={msg.text_body}
//   deleteMessage={this.props.deleteMessage}
// />

// MESSAGE SENT FROM NON USER
// <Message
//   className="messageRcvd"
//   key={msg.id}
//   sender={msg.sender_id}
//   receiver={msg.receiver_id}
//   text={msg.text_body}
//   deleteMessage={this.props.deleteMessage}
// />
