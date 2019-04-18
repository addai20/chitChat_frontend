import React, { Component } from 'react';
import FriendWidget from '../components/FriendWidget'

class FriendsList extends Component {

  render(){
    return(

      <div className ="friendsList">



        {this.props.allUsers.filter(u => u.id != this.props.currentUser.id).map((usr)=>{
          return(
            <FriendWidget
              userInfo={usr}
              key={usr.id}
              friendClickHandler={this.props.friendClickHandler}
              />
          )
        })}

      </div>
    )
  }
}

export default FriendsList
// Tried to make a radio Group to filter out the friends by language
// <div className="ui horizontal list">
//   <radioGroup>
//     <input type="radio" name="sort" value="English">test 1</input>
//     <input type="radio" name="sort" value="German">test 2</input>
//     <input type="radio" name="sort" value="Spanish">test 3</input>
//     <input type="radio" name="sort" value="French">test 3</input>
//     <input type="radio" name="sort" value="Italian">test 3</input>
//     <input type="radio" name="sort" value="Portuguese">test 3</input>
//
//   </radioGroup>
// </div>
