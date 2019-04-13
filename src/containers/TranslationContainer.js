import _ from 'lodash'
import React, { Component } from 'react';
import TranslationBox from '../components/TranslationBox'

class TranslationContainer extends Component {

  render(){
    return(
      <div className="TranslationContainer">
        <div>
          <textarea rows="4" cols="25" placeholder="Source language"
            onChange={(e)=>this.props.translationHandler(e)}
            />
          <button onClick={null}/>

        </div>



        <div>
          <textarea rows="4" cols="25" placeholder="Desired language"
            value={_.debounce(()=>this.props.queryTranslateApi(this.props.translationText), 500, { leading: true })}

            />
          <button onClick={()=>this.props.queryTranslateApi()}/>
        </div>


      </div>
    )
  }
}

export default TranslationContainer
