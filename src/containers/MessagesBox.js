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

            <Message
              className="messageSent"
              key={msg.id}
              sender={msg.sender_id}
              receiver={msg.receiver_id}
              text={msg.text_body}
              deleteMessage={this.props.deleteMessage}
            />
          :

          <Message
            className="messageRcvd"
            key={msg.id}
            sender={msg.sender_id}
            receiver={msg.receiver_id}
            text={msg.text_body}
            deleteMessage={this.props.deleteMessage}
          />

        )

      })
    : null}
      </div>
    )
  }
}

export default MessagesBox

// <Message
//   className="messageSent"
//   key={msg.id}
//   sender={msg.sender_id}
//   receiver={msg.receiver_id}
//   text={msg.text_body}
//   deleteMessage={this.props.deleteMessage}
// />
