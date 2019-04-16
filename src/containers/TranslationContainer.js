import _ from 'lodash'
import React, { Component } from 'react';
import TranslationBox from '../components/TranslationBox'

class TranslationContainer extends Component {

  render(){
    console.log(this.props.sourceLang);
    return(
      <div className="TranslationContainer">
        <div>
          <textarea rows="4" cols="25" placeholder={`Source Language: ${this.props.desiredLang}`}
            onChange={(e)=>this.props.translationHandler(e)}
            />
          <button onClick={null}/>

        </div>



        <div>
          <textarea rows="4" cols="25" placeholder={`Desired Language: ${this.props.sourceLang}`}
            value={this.props.translationText}
            onChange={null}


            />
          <button onClick={()=>this.props.queryTranslateApi()}>Translate</button>
        </div>


      </div>
    )
  }
}

export default TranslationContainer
