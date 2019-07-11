import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

//показывает детально запись c возможностью редактирования и удаления
class Detail extends Component{
    _delete(){
        console.log('delete')
    }
    _edit(){
        console.log('delete')
    }

    render(){
        console.log(this.props)
        return(
            <div className="detail" >
                <h2> {this.props.match.params.title}</h2>
                <span> texttexttexttexttext texttext </span>
                <button onClick={this._edit.bind(this)}> Edit</button>
                <button onClick={this._delete.bind(this)}> Delete</button>
            </div>
        );
    }
}

export default withRouter(Detail);
// export default connect(
//     state => ({ // this function is map state to props
//       store: state //global state
//     }),
//     dispatch => ({
//       onChangeWeather: (temp,hum,weath,city,lat,lon) =>{
//         dispatch({
//           type: 'CHANGE_WEATHER',
//           temp: temp,
//           hum: hum,
//           weath: weath,
//           city: city,
//           lat: lat,
//           lon: lon
//         })
//       }
  
//     })
//   )(GetAllRecords);