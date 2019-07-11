import React, { Component } from 'react';
import './App.css';


import {Provider} from 'react-redux';
import {createStore} from  'redux';
import {Route, NavLink} from 'react-router-dom'
import reducer from './reducers';


import  GetAllRecords  from './components/Records/GetAllRecords'
import  CreateRecord  from './components/Records/CRUD_record'
import Detail from './components/Records/Detail';
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
              <NavLink to="/" exact>Home (Get all)</NavLink>
            </li>
            <li>
              <NavLink to="/create" exact>Create</NavLink>
            </li>
          </ul>
        </nav>
        <Route path="/" exact  component={GetAllRecords}  />
        <Route path="/create" exact component={CreateRecord}   />
        <Route path="/detail/:title" exact component={Detail}   />
        {/* <GetAllRecords /> */}
        {/* <CreateRecord/> */}
      </Provider>
    </div>
  );
}

export default App;
