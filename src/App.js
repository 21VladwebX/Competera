import React, { Component } from 'react';
import './App.css';


import {Provider} from 'react-redux';
import {createStore} from  'redux';

import reducer from './reducers';

import  GetAllRecords  from './components/Records/GetAllRecords'
import  CreateRecord  from './components/Records/CRUD_record'
const store = createStore(
  reducer, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(()=>{
  console.log(store.getState());
});

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <GetAllRecords />
        <CreateRecord/>
      </Provider>
    </div>
  );
}

export default App;
