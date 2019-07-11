import React, { Component } from 'react';
import TranslationContainer from '../containers/TranslationContainer'
import MessagesBox from '../containers/MessagesBox'

class MessageContainer extends Component{

  sendMessageHandler = (event)=>{
    this.props.messageHandler(event)
  }

  render(){
    console.log(this.props.sourceLang);
    return(
      <div >
        <MessagesBox
          selectedUser={this.props.selectedUser}
          messages={this.props.messages}
          currentUser={this.props.currentUser}
          deleteMessage={this.props.deleteMessage}
        />
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Write a message!" aria-label="Recipient's username" aria-describedby="button-addon2"
          onChange={(event)=>this.props.messageHandler(event)} value={this.props.currentMessage}
          />
            <div className="input-group-append">
              <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={()=>this.props.messageSender()} id="button-addon2">Send</button>
            </div>
        </div>
        <TranslationContainer
          queryTranslateApi={this.props.queryTranslateApi}
          translationText={this.props.translationText}
          translationHandler={this.props.translationHandler}
          sourceLang={this.props.sourceLang}
          desiredLang={this.props.desiredLang}
        />
      </div>
    )
  }

}

export default MessageContainer;
