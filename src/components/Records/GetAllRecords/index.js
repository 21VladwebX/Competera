import React, { Component } from 'react';
import {connect} from 'react-redux';

//вытягивает с локального хранилища данные и показывает их
class GetAllRecords extends Component{


    render(){
              

      let items = {...localStorage}; 

      
      let elems = Array();

      if(items){
        for( let obj in items) {

          let elem = JSON.parse(items[obj])
          let title =  elem.title

          elems.push( [[elem.title], [elem.id]] )
        }
      }else{
        elems = Array();
      }

      return(
        <div className="getAllRecords">
          <ul>
            {
            Object.keys(elems).map(key =>{
              // let href = '/detail?' + id={elems[key]} 
              <li key={key} recid={elems[key][1]}>
              
              <a href={'/detail?' + {id={elems[key][.]}}}>{elems[key][0]}</a></li>
            }
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