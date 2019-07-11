import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

//показывает детально запись c возможностью редактирования и удаления

class Detail extends Component{
    _delete(){
        // console.log('delete')
    }
    _edit(){
        // console.log('delete')
    }

    render(){
        console.log(this.props)
        console.log(this.state)
        
        return(
            <div className="detail" recid={this.props.match.params.id} >
                <h2> {this.props.match.params.id}</h2>
                <span> {this.props.match.params.text} </span>
                <button onClick={this._edit.bind(this)}> Edit</button>
                <button onClick={this._delete.bind(this)}> Delete</button>
            </div>
        );
    }
}

export default withRouter(connect(
    state => ({ // this function is map state to props
        store: state //global state
    }))
(Detail))