import React, { Component } from 'react';
import {connect} from 'react-redux';
import RecordsTitle from '../RecordsTitle'
//вытягивает с локального хранилища данные и показывает их
class GetAllRecords extends Component{
  _detail(props){
    console.log(props)
    alert(1)
  }

    render(){
              

      let items = {...localStorage}; 

      
      let elems = [];

      if(items){
        for( let obj in items) {

          let elem = JSON.parse(items[obj])
          elems.push( [elem.title, elem.id, elem.text] )
        }
      }else{
        elems = [];
      }
      console.log(this.props)
      return(
        <div className="getAllRecords">
          <ul>
            {
              Object.keys(elems).map( (key) => {
              
              return (<li key={key}><RecordsTitle
                title={elems[key][0]}
                id={elems[key][1]}
                text={elems[key][2]}
                {...this.props}
              /></li>)

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