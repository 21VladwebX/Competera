import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import './recordsTitle.css'
//показывает title
class RecordsTitle extends Component{

    render(){
        console.log(this.props)
        return(
            <div className="recordsTitle"
            onClick = {() => {
                this.props.history.push('/detail/' + this.props.id)
        }}
            >
                <h2> {this.props.title}</h2>
                <span> {this.props.text}</span>
            </div>
        );
    }
}

export default withRouter(RecordsTitle);
