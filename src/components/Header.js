import React, { Component } from 'react';

class Header extends Component {

  render(){
    return(
      <div className="profileContainer">
        <h2 className="profile">
          <img alt="avatar" src="https://i.imgur.com/luI4E2ft.png">
          </img>
          {this.props.currentUser.first_name}
        </h2>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"
          onClick={this.props.toggleModal}>
          Edit User
        </button>
      </div>
    )
  }
}

export default Header




//THIS BUTTON/ONCLICK SHOULD BE MOVED TO THE MODAL ITSELF
// <button onClick={()=>this.props.editUser()}>edit</button>
