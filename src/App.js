import React from 'react';
import { createStore , applyMiddleware,combineReducers } from "redux";
import { Provider } from "react-redux"
import  thunk  from "redux-thunk"
import comReducer from "./reducer/index"
import  Qibinglian  from "./pages/Qibinglian"
import  { BrowserRouter ,Route} from "react-router-dom"


var store = createStore(combineReducers(comReducer),applyMiddleware(thunk))



//创建reducer
class App  extends React.Component{
  render(){
    return<Provider store={store}>
          <BrowserRouter >
              <div>
                <Route exact path="/" component={Qibinglian}></Route>
              </div>
          </BrowserRouter>
      </Provider>

  }
}

export default App;
