import React, { Component } from 'react';
import {connect} from 'react-redux';

//вытягивает с локального хранилища данные и показывает их
class GetAllRecords extends Component{


    render(){
              
      // let parseLocalStorage = JSON.parse(localStorage.getItem(badId))
      // console.log(parseLocalStorage)
      let items = {...localStorage}; //
      // console.log(items[0])
      
      let store = this.props.store;
      let elems = Array();
      // if(items){
      //   items = JSON.parse(items);
      // }
      if(store){
        for( let obj in items) {
          // console.log(obj)
          let elem = JSON.parse(items[obj])
          let title =  elem.title
          // console.log( JSON.parse(elem))
          elems.push( [[elem.title], [elem.id]] )
        }
      }else{
        elems = Array();
      }

      return(
        <div className="getAllRecords">
          <ul>
            {            
            Object.keys(elems).map(key => 
              <li key={key} recid={elems[key][1]}>{elems[key][0]}</li>
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