import React, { Component } from 'react';

class UpdateUserForm extends Component {


  render(){
    return(
      <div className="bd-example">
      <form>
      <div className="form-row">
        <div className="col-md-4 mb-3">
        <label for="validationServer01">First name</label>
        <input value={this.props.inputFirstName} onChange={(e)=>this.props.formOnChange(e, "inputFirstName")} type="text" className="form-control is-valid" id="validationServer01" placeholder="First name"  required=""/>
        <div className="valid-feedback">
        Looks good!
        </div>
        </div>
        <div className="col-md-4 mb-3">
        <label for="validationServer02">Last name</label>
        <input value={this.props.inputLastName}onChange={(e)=>this.props.formOnChange(e, "inputLastName")} type="text" className="form-control is-valid" id="validationServer02" placeholder="Last name"  required=""/>
        <div className="valid-feedback">
        Looks good!
        </div>
        </div>

        </div>

        <div className="form-group">
        <div className="col-md-5 mb-3">
        <select value={this.props.inputNative} onChange={(e)=>this.props.formOnChange(e, "inputNative")} className="custom-select" id="custom-select" required="">
          <option value="">Native Language</option>
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
          <option value="Italian">Italian</option>
          <option value="Portuguese">Portuguese</option>
        </select>

        <br/>

      </div>
      <div className="col-md-5 mb-3">
        <select value={this.props.inputDesired} onChange={(e)=>this.props.formOnChange(e, "inputDesired")} className="custom-select" id="custom-select" required="">
          <option value="">Desired Language</option>
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
          <option value="Italian">Italian</option>
          <option value="Portuguese">Portuguese</option>
        </select>
      </div>



      </div>

      <button className="btn btn-primary" type="submit" onClick={(e)=>this.props.updateUser(e)}>Submit form</button>
</form>

      </div>
    )
  }
}

export default UpdateUserForm
