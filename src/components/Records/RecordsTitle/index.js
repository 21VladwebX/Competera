import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import './recordsTitle.css'
//показывает детально запись c возможностью редактирования и удаления
class RecordsTitle extends Component{

    render(){
        // console.log(this.props)
        return(
            <div className="recordsTitle"
            onClick = {() => {this.props.history.push('/detail/' + this.props.title.toLowerCase())}}
            >
                <h2> {this.props.title}</h2>
                <span> {this.props.text}</span>
            </div>
        );
    }
}

export default withRouter(RecordsTitle);
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