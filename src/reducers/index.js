import { combineReducers } from 'redux';
// import weather from './weather_data';


// export default combineReducers({
//   weather
// })

export default function weather(state = [], action){
  // console.log('action');
  // console.log(action);
  if(action.type === 'SET_NEW_RECORD'){

    return{
      title: action.title,
      text: action.text
    }
  }
  return state;
}