import React from 'react';
import { createStore , applyMiddleware,combineReducers } from "redux";
import { Provider } from "react-redux"
import  thunk  from "redux-thunk"
import comReducer from "./redux/index"
import  { BrowserRouter ,Route,Switch} from "react-router-dom"
import "./common.css"
import AuthRouter from "./component/authrouter/authrouter";
// import "./config"

//页面
import Login from "./container/login";
import Register from "./container/register";
import GeniusInfo from "./container/geniusinfo/geniusinfo";


var store = createStore(combineReducers(comReducer),applyMiddleware(thunk))

function Boss(){
    return<h1>Boss</h1>
}
//创建reducer
store.subscribe(function () {
   console.log(store.getState())
})
class App  extends React.Component{
  render(){
    return(<Provider store={store}>
          <BrowserRouter >
              <AuthRouter></AuthRouter>
              <div>
                  <Switch>
                      <Route path="/boss" component={Boss}></Route>
                      <Route path="/geniusinfo" component={GeniusInfo}></Route>
                      <Route path="/login" component={Login}></Route>
                      <Route path="/register" component={Register}></Route>
                  </Switch>
              </div>
          </BrowserRouter>
      </Provider>)

  }
}

export default App;
