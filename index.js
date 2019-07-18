import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import Controller from './controller/Controller';
import { Route, HashRouter, Redirect,Switch,BrowserRouter } from 'react-router-dom';
import IndexMobile from './view/home/indexMobile'
import Login from './view/account/login'
import {UserInfo} from './utils/helper'
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
  let userInfo= UserInfo.getUserInfo();
  if (!userInfo) {
    const { location } = props;
    const { pathname, search } = location;
    let returnurl = "?returnurl=" + encodeURIComponent(pathname + search);
    
    return (<Redirect to={{ pathname: "/account/login", search: returnurl }}></Redirect>)
  }
  return <View {...props} />;
}

// let mathComponent=(routeInfo)=>{
//   let url = routeInfo.match.url.toLowerCase();
//   let View = (lstComponent.find(x => x.path.indexOf(url) >= 0) || {}).component;
//   return View||View404;
// }

const MatchView = (props) => {
  console.log("props11", props)
  const {location}=props;
  const{pathname}=location;
  let url=pathname.toLowerCase()+'.js';
  let View = (lstComponent.find(x => x.path.indexOf(url) >= 0) || {}).component;
  console.log("View",View)
  View=View||View404
  return (<Authenrization view={View} {...props}></Authenrization>)
}

ReactDOM.render(<Provider store={store}>
  <BrowserRouter>
    <Switch>
      <Route exact path="/account/login" component={Login}></Route>
      <Route exact path="/" render={x => (<Authenrization view={IndexMobile} {...x} />)} ></Route>
      <Route component={MatchView} ></Route>
      {/* <Route exact path="/:nav/:controller/:action" render={x => (<Authenrization view={mathComponent(x)} {...x} />)}></Route>
      <Route exact path="/:controller/:action" render={x => (<Authenrization view={mathComponent(x)} {...x} />)}></Route>
      <Route exact path="/:page" render={x => (<Authenrization view={mathComponent(x)} {...x} />)}></Route>
      <Route exact path="/" render={x => (<Authenrization view={IndexMobile} {...x} />)} ></Route>
      <Route component={View404}></Route> */}
    </Switch>
  </BrowserRouter>
</Provider>, document.getElementById("root"))