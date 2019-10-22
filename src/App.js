import React from 'react';
import { createStore , applyMiddleware,combineReducers } from "redux";
import { Provider } from "react-redux"
import  thunk  from "redux-thunk"
import comReducer from "./redux/index"
import  { BrowserRouter ,Route} from "react-router-dom"
import "./common.css"
// import "./config"

//页面
import Login from "./container/login";
import Register from "./container/register";


var store = createStore(combineReducers(comReducer),applyMiddleware(thunk))

//创建reducer
class App  extends React.Component{
  render(){
    return(<Provider store={store}>
          <BrowserRouter >
              <div>
                  <Route path="/login" component={Login}></Route>
                  <Route path="/register" component={Register}></Route>
              </div>
          </BrowserRouter>
      </Provider>)

  }
}

export default App;
