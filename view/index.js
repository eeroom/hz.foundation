import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import Controller from '../controller/Controller';
import {  Route,HashRouter } from 'react-router-dom';

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

let lstView=require.context("./view", true, /\.js$/);
let lstComponent= lstView.keys().map(key => ({
  path:lstView.resolve(key).toLowerCase()
  ,component:lstView(key).default
}));

let View404=()=>{
  return (<div>页面跑了( ▼-▼ )</div>);
}

ReactDOM.render(<Provider store={store}>
   <HashRouter>
     
    <Route exact path="/:controller/:action" render={x=>{
                console.log("match",x)
                let url= x.match.url.toLowerCase();
                let View=(lstComponent.find(x=>x.path.indexOf(url)>=0) ||{}).component;
                console.log("View",View)
                View=View||View404;
                return (<View {...x} />);
            }}></Route>
    </HashRouter>
</Provider>,document.getElementById("root"))