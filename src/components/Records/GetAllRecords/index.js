import React, { Component } from 'react';
import {connect} from 'react-redux';

//вытягивает с локального хранилища данные и показывает их
class GetAllRecords extends Component{


    render(){
      let store = this.props.store;
      let elems = Array();
      if(store){
        for( let obj in store) {
          let elem = store[obj]
          let title =  elem.title
          elems.push( elem.title )
        }
      }else{
        elems = Array();
      }

      return(
        <div className="getAllRecords">
          <ul> 
            {            
            Object.keys(elems).map(key => 
              <li key={key}>{elems[key]}</li>
            )
          }
          </ul>
        </div>
      );
    }
}

// export default GetAllRecords;
export default connect(
  state => ({ // this function is map state to props
    store: state //global state
  })
)(GetAllRecords);