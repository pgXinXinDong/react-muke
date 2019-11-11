import React from 'react';
import { createStore , applyMiddleware,combineReducers } from "redux";
import { Provider } from "react-redux"
import  thunk  from "redux-thunk"
import comReducer from "./redux/index"
import  { BrowserRouter , Route , Switch } from "react-router-dom"
import "./common.css"
import AuthRouter from "./component/authrouter/authrouter";
import { composeWithDevTools } from 'redux-devtools-extension'


//页面
import Login from "./container/login";
import Register from "./container/register";
import GeniusInfo from "./container/geniusinfo/geniusinfo";
import BossInfo from "./container/bossinfo/bossinfo";
import DashBoard from "./component/dashboard/dashboard";
import Chat from "./component/chat/chat"


var store = createStore(combineReducers(comReducer),applyMiddleware(thunk),composeWithDevTools())

//创建reducer
store.subscribe(function () {
   console.log("store",store.getState())
})
function LoginTest(){
    return<div>
        <h1>Login</h1>
    </div>

}
class App  extends React.Component{
  render(){
    return(<Provider store={store}>
          <BrowserRouter >
              <AuthRouter></AuthRouter>
              <div>
                  <Switch>
                      <Route path="/geniusinfo" component={GeniusInfo}/>
                      <Route path="/bossinfo" component={BossInfo}/>
                      <Route path="/login" component={Login}/>
                      <Route path="/register" component={Register}/>
                      <Route path="/chat/:user" component={Chat}/>
                      <Route component={DashBoard}/>
                  </Switch>
              </div>
          </BrowserRouter>
      </Provider>)

  }
}

export default App;
