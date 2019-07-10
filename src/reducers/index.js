import { combineReducers } from 'redux';
// import weather from './weather_data';


// export default combineReducers({
//   weather
// })

export default function weather(state = [], action){
  // console.log('action');
  // console.log(action.id);
  switch (action.type){
    case 'SET_NEW_RECORD':
      return{
        ...state,
      [action.id]:{           
          title: action.title,
          text: action.text
        }
      }
      break;
    default: 
      return state;
  }
  
}