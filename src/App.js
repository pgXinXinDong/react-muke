import React from 'react';
import { createStore , applyMiddleware,combineReducers } from "redux";
import { Provider } from "react-redux"
import  thunk  from "redux-thunk"
import comReducer from "./reducer/index"
import  { BrowserRouter ,Route} from "react-router-dom"
import "./config"


var store = createStore(combineReducers(comReducer),applyMiddleware(thunk))



//创建reducer
class App  extends React.Component{
  render(){
    return<Provider store={store}>
          <BrowserRouter >
              <div>
                <h2>2222</h2>
              </div>
          </BrowserRouter>
      </Provider>

  }
}

export default App;
