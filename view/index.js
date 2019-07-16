import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import Controller from '../controller/Controller';

let store = createStore((state, action) => {
  // console.log("state", state);
  // console.log("action", action);
  if (action.namespace){
    return { ...state, [action.namespace]:{...state[action.namespace],...action.data} };
  }
  return state;
}, {});

Controller.dispatch=store.dispatch;
Controller.getState=store.getState;

ReactDOM.render(<Provider store={store}>
  <MyPageWrapper msg={"hello world"}></MyPageWrapper>
</Provider>,document.getElementById("root"))