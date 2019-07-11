import React, { Component } from 'react';
import './App.css';


import {Provider} from 'react-redux';
import {createStore} from  'redux';
import {Route} from 'react-router-dom'
import reducer from './reducers';

import  GetAllRecords  from './components/Records/GetAllRecords'
import  CreateRecord  from './components/Records/CRUD_record'
const store = createStore(
  reducer, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(()=>{
  // console.log(store.getState());
});

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <nav>
          <ul>
            <li>
              <a href="/">Home (Get all)</a>
            </li>
            <li>
              <a href="/create">Create</a>
            </li>
          </ul>
        </nav>
        <Route path="/" exact  component={GetAllRecords}  />
        <Route path="/create" exact component={CreateRecord}   />
        {/* <GetAllRecords /> */}
        {/* <CreateRecord/> */}
      </Provider>
    </div>
  );
}

export default App;
