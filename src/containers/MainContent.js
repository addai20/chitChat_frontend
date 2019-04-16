import React, { Component } from 'react';
// import { Container, Button, Alert, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Header from '../components/Header'
import MessageContainer from '../containers/MessageContainer'
import FriendsList from '../containers/FriendsList'
// import EditModal from '../components/EditModal'

class MainContent extends Component {
  //does state need to live here as well??
  constructor(){
    super()

    this.state = {
      currentUser: {},
      masterMessages: [],
      messages: [],
      currentMessage: "",
      selectedUser: {},
      allUsers: [],
      translationText: "",
      currentConversation: {}
    }
  }

  componentDidMount(){
    // Promise.all allows multiple fetches to be done simultaneously, see below link
    // https://medium.com/@ahnahn.un/a-brief-intro-to-promise-all-92291d93780c
    Promise.all([
      fetch('http://localhost:3000/users/1'),
      fetch('http://localhost:3000/users/1/messages'),
      fetch('http://localhost:3000/users')

    ])
    .then(([res1, res2, res3]) => Promise.all([res1.json(), res2.json(), res3.json()]))
    .then(([userInfo, messages, allUsers])=>{
      console.log(userInfo);
      console.log(messages);
      console.log(allUsers);

      return this.setState({
        currentUser: userInfo,
        messages: messages,
        masterMessages: messages,
        allUsers: allUsers,
      })
    })
  }



 //  ? key=<API key>
 // & text=<text to translate>
 // & lang=<translation direction>
 // & [format=<text format>]
 // & [options=<translation options>]
 // & [callback=<name of the callback function>]

  translationHandler = (e)=> {
    // refactor this method to only update the translation text
    // update state to include typed text for translationText

    let input = e.target.value

    this.setState({translationText: input})
  }

  getLangDirection(){

    let state = this.state
    console.log(state);
    // get native and desired languages and store in a variable
    let native = this.state.currentUser.native_language
    let desired = this.state.currentUser.desired_language
    let start;
    let finish;
    let result;

    switch (native) {
      // case native === 'English':
      //   start = 'en'
      //   break;
      case native === 'Spanish':
        start = 'es'
        break;
      case native === 'French':
        start = 'fr'
        break;
      case native === 'Portuguese':
        start = 'pt'
        break;
      case native === 'Italian':
        start = 'it'
        break;
      case native === 'German':
        start = 'ge'
        break;
      default: start = 'en'
    }

    switch (desired) {
      case desired === 'English':
        finish = 'en'
        break;
      case desired === 'Spanish':
        finish = 'es'
        break;
      case desired === 'French':
        finish = 'fr'
        break;
      case desired === 'Portuguese':
        finish = 'pt'
        break;
      case desired === 'Italian':
        finish = 'it'
        break;
      case desired === 'German':
        finish = 'ge'
        break;
      default:
    }

  result = `${start}-${finish}`
  debugger
    return result
  }

  queryTranslateApi = ()=>{
    // console.log('queryTranslateApi invoked!');
    console.log(this.getLangDirection());
    const url = `https://translate.yandex.net/api/v1.5/tr.json/translate`
    const key = `trnsl.1.1.20190412T160028Z.b3144093501b2817.c20a5121c33779f2470ca54177a5b3c3ccba3b3a`

    let text = this.state.translationText

    let lang;

    // NEEDS TO BE MORE DYNAMIC TO ACCOMODATE MULTIPLE LANGUAGES
    if (this.state.currentUser.desired_language === "English"){
      lang = `en-es`
    } else {
      lang = `es-en`
    }

    debugger
    let format = `plain`

    fetch(`${url}?key=${key}&text=${text}&lang=${lang}`)
    .then(resp=>{
      return resp.json()
    })
    .then((transText)=>{
      console.log(transText)
      debugger
      this.setState({translationText: transText.text[0]})
    })
  }


  friendClickHandler = (userObj) =>{
    console.log(userObj);
    console.log("friendClickHandler invoked!");

    // debugger
    // get master messages for reset
    let masterMessages = this.state.masterMessages

    // update messages with mssgs from current user and clicked person
    let currentUser = this.state.currentUser.id
    let msgsCopy = this.state.messages
    let recipient = userObj

    // filter messages for sender receiver combo

    let filteredMsgs = masterMessages.filter((msg)=> {
        return msg.sender_id === currentUser && msg.receiver_id === recipient.id
    })

    // debugger

    this.setState({
      messages: filteredMsgs,
      selectedUser: userObj
    })

    // return filteredMsgs
  }

  deleteMessage = (e) => {
    console.log("deleteMessage Invoked", e);
    // debugger
  }

//handles the composition of a message
  messageHandler = (e) => {
    console.log(e);
    // debugger
    console.log("messageHandler invoked");

    this.setState({currentMessage: e.target.value})

    // way to access message text
    // let message = event.target.parentElement.parentElement.children[0].value
  }

  langToggler = ()=> {
    let fluentLang = this.state.currentUser.native_Language

    // displayed text should be toggled based upon native_Language
    // consider changing the backend structure of lang to match expectations of
  }

//handles the sending of a message to a recipient
  messageSender = () =>{
    console.log("messageSender Invoked!");

    let selectedUser = this.state.selectedUser

    if (selectedUser.id){
      let recipient = this.state.selectedUser.id
      let message = this.state.currentMessage
      let sender = this.state.currentUser.id
      let data = {receiver_id: recipient, seen: false, sender_id: sender, text_body: message}

      fetch('http://localhost:3000/users/1/messages', {
        method:'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res=>res.json())
      .then(response => {
        console.log('Success')
        let copyOfMsgs = [...this.state.messages]
        copyOfMsgs.push(response)

        this.setState({messages: copyOfMsgs})
      })
      .catch(error => console.error('Error', error));

      // erase current message after sending
      this.setState({currentMessage: ""})

    } else {
      alert("Please select a recipient!")

    }

    // capture current message & sender from state

  }

  wordSaver = ()=>{
    debugger
  }

  openModal = ()=>{
    console.log("openModal Invoked!");
    debugger
  }

  editUser = ()=>{
    console.log("editUser invoked!");
      //this method should perform a PUT fetch to the backend
    // Get Current User
    let userId = this.state.currentUser.id
    debugger
  }



  render(){
    return(
      <div className="mainContent" >
        <Header className="header"
          currentUser={this.state.currentUser}
          editUser={this.editUser}
          openModal={this.openModal}
        />
      <div className="subContent">
        <FriendsList
          allUsers={this.state.allUsers}
          friendClickHandler={this.friendClickHandler}
          currentUser={this.state.currentUser}
        />

        <MessageContainer
          translationHandler={this.translationHandler}
          translationText={this.state.translationText}
          selectedUser={this.state.selectedUser}
          deleteMessage={this.deleteMessage}
          messageHandler={this.messageHandler}
          messages={this.state.messages}
          filteredMsgs={null}
          currentMessage={this.state.currentMessage}
          messageSender={this.messageSender}
          currentUser={this.state.currentUser}
          queryTranslateApi={this.queryTranslateApi}
          sourceLang={this.state.currentUser.native_language}
          desiredLang={this.state.currentUser.desired_language}

        />

      </div>
      </div>
    )
  }
}

export default MainContent
