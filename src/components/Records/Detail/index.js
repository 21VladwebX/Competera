import React, { Component } from 'react';
import {connect} from 'react-redux';

//показывает детально запись c возможностью редактирования и удаления
class Detail extends Component{


    render(){
        return(
            <div className="detail">
                <h2> TITLE</h2>
                <span> texttexttexttexttext texttext </span>
            </div>
        );
    }
}

export default Detail;
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