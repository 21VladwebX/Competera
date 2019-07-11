import React, { Component } from 'react';
import {connect} from 'react-redux';
import './crud.css'
//возможность создания и редактирования записи
class CreateRecord extends Component{

    _create(e){
        e.preventDefault();
        console.log('create');
        let title = document.querySelector('[name="title"]').value,
            text = document.querySelector('[name="text"]').value;

        // if(title.length < 5 || text.length < 10){
        //     alert('min length for title is 5 symbols and for text is 10 symbols');
        //     return;
        // }

        let items = {...localStorage};
        let highest = parseInt(Object.keys(items).sort().pop())

        let badId;
        if( isNaN(highest) ){
            badId = 0
        }else{
            badId = parseInt(Object.keys(this.props.store).length) >= highest ? parseInt(Object.keys(this.props.store).length) : highest + 1;
        }
        this.props.setNewRecord(badId,title,text);
        //переходим на главную?
        let obj = {
            id: badId,
            title: title,
            text: text
        }
        
        localStorage.setItem(badId, JSON.stringify(obj));

    }
    render(){
        return(
            <form action="/" className="create">
                <label htmlFor="title"> title</label>
                <input type="text" name="title"/>
                <label htmlFor="text"> Text  </label>
                <input type="text" name="text" />

                <button onClick={this._create.bind(this)}> Submit</button> 
            </form>
        );
    }
}

export default connect(
    state => ({ // this function is map state to props
      store: state //global state
    }),
    dispatch => ({
        setNewRecord: (id,title,text) =>{
        dispatch({
            type: 'SET_NEW_RECORD',
            id: id,
            title: title,
            text: text
        })
      }
  
    })
  )(CreateRecord);