import React, { Component } from 'react';
import {connect} from 'react-redux';

//вытягивает с локального хранилища данные и показывает их
class GetAllRecords extends Component{


    render(){
      console.log(this.props)
      let arr = this.props;
      return(
        <div className="getAllRecords">
          <ul>
              {/* {} */}
          </ul>
        </div>
      );
    }
}

// export default GetAllRecords;
export default connect(
  state => ({ // this function is map state to props
    store: state //global state
  }),
  dispatch => ({
      setNewRecord: (title,text) =>{
      dispatch({
        type: 'SET_NEW_RECORD',
        title: title,
        text: text
      })
    }

  })
)(GetAllRecords);