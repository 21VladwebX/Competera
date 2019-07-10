import React, { Component } from 'react';
import {connect} from 'react-redux';

//возможность создания и редактирования записи
class CreateRecord extends Component{

    _create(e){
        e.preventDefault();
        console.log('create');
        let title = document.querySelector('[name="title"]').value,
            text = document.querySelector('[name="text"]').value;
        console.log(title, text);
        if(title.length < 5 || text.length < 10){
            alert('min length for title is 5 symbols and for text is 10 symbols');
            return;
        }
        this.props.setNewRecord(title,text);
        //переходим на главную?
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
        setNewRecord: (title,text) =>{
        dispatch({
          type: 'SET_NEW_RECORD',
          title: title,
          text: text
        })
      }
  
    })
  )(CreateRecord);