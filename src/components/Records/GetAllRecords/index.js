import React, { Component } from 'react';
import {connect} from 'react-redux';

//вытягивает с локального хранилища данные и показывает их
class GetAllRecords extends Component{


    render(){
      return(
        <ul>
            <li> first </li>
            <li> second </li>
            <li> third </li>
        </ul>
      );
    }
}

export default GetAllRecords;
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