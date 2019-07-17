import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import Controller from './controller/Controller';
import { Route, HashRouter, Redirect } from 'react-router-dom';
import IndexMobile from './view/home/indexMobile'
import Login from './view/account/login'

let store = createStore((state, action) => {
  // console.log("state", state);
  // console.log("action", action);
  if (action.namespace) {
    return { ...state, [action.namespace]: { ...state[action.namespace], ...action.data } };
  }
  return state;
}, {});

Controller.dispatch = store.dispatch;
Controller.getState = store.getState;

let lstView = require.context("./view", true, /\.js$/);
console.log("lstView", lstView)
let lstComponent = lstView.keys().map(key => ({
  path: lstView.resolve(key).toLowerCase()
  , component: lstView(key).default
}));
console.log("lstComponent", lstComponent)
let View404 = () => {
  return (<div>页面跑了( ▼-▼ )</div>);
}

const Authenrization = ({ view: View, ...props }) => {
  if (!window.userInfo || !window.userInfo.name)
    return (<Redirect to={"/account/login"} {...props}></Redirect>)
  return <View {...props} />;
}

let mathComponent=(routeInfo)=>{
  let url = routeInfo.match.url.toLowerCase();
  let View = (lstComponent.find(x => routeInfo.path.indexOf(url) >= 0) || {}).component;
  return View||View404;
}

ReactDOM.render(<Provider store={store}>
  <HashRouter>
    <Route exact path="/account/login" component={Login}></Route>
    <Route exact path="/:nav/:controller/:action" render={x => (<Authenrization view={mathComponent(x)} {...x} />)}></Route>
    <Route exact path="/:controller/:action" render={x => (<Authenrization view={mathComponent(x)} {...x} />)}></Route>
    <Route exact path="/:page" render={x => (<Authenrization view={mathComponent(x)} {...x} />)}></Route>
    <Route exact path="/" render={x => (<Authenrization view={IndexMobile} {...x} />)} ></Route>
    <Route component={View404}></Route>
  </HashRouter>
</Provider>, document.getElementById("root"))