export default function setNew(state = [], action){
    if(action.type === 'SET_NEW_RECORD'){

      return{
        ...state,
        [action.id]:{        
            id: action.id,   
            title: action.title,
            text: action.text
        }
      }
    }
    return state;
  }