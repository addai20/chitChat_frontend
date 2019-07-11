import React, { Component } from 'react';
import Message from '../components/Message'

class MessagesBox extends Component {

  formatTime = (time) =>{
    //take in a the time created and return only the time
    //EXAMPLE TIME 2019-04-18T00:21:38.855Z

    let arr = time.split(':')
    let hours = arr[1]
    let minutes = arr[2]

    return `${hours}:${minutes.split(".")[0]}`

  }

  render(){
    console.log(this.props);
    return(
      <div className="messagesBox">
        {this.props.selectedUser ? this.props.messages.map((msg)=>{

          if(this.props.currentUser.id === msg.sender_id ){
            return (


              <div className="container">
                <img src="http://icons.iconarchive.com/icons/papirus-team/papirus-status/64/avatar-default-icon.png" alt="Avatar"/>
                <p>Me:</p> <p>{msg.text_body}</p>
                <span className="time-right">{null}</span>
              </div>
            )
          } else {
            return (
              <div className="container darker">
                <img src="http://icons.iconarchive.com/icons/papirus-team/papirus-status/64/avatar-default-icon.png" alt="Avatar"/>
                <p>{msg.text_body}</p>
                <span className="time-right">{null}</span>
              </div>
            )
          }








      })
    :  null}
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

// this.props.selectedUser.id ? this.props.messages.map((msg)=>{
//   return (
//     this.props.currentUser.id === msg.sender_id ?
//
//     <div className="container">
//       <img src="http://icons.iconarchive.com/icons/papirus-team/papirus-status/64/avatar-default-icon.png" alt="Avatar"/>
//       <p>{msg.text_body}</p>
//       <span className="time-right">{this.formatTime(msg.created_at)}</span>
//     </div>
//
//   :
//
//   <div className="container darker">
//     <img src="http://icons.iconarchive.com/icons/papirus-team/papirus-status/64/avatar-default-icon.png" alt="Avatar"/>
//     <p>{msg.text_body}</p>
//     <span className="time-right">{this.formatTime(msg.created_at)}</span>
//   </div>
//
// )
//
// })
// :  null
