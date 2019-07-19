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

let lstViewPage = require.context("./view", true, /\.js$/);
console.log("lstViewPage", lstViewPage)
let lstViewComponent = lstViewPage.keys().map(key => ({
  path: lstViewPage.resolve(key).toLowerCase()
  , component: lstViewPage(key).default
}));
console.log("lstComponent", lstViewComponent)
let View404 = () => {
  return (<div>页面跑了( ▼-▼ )</div>);
}

let ViewForbid = () => {
  return (<div>没有访问权限( ▼-▼ )</div>);
}

const ViewFilter = ({ view: View, ...props }) => {
  const { location } = props;
  const { pathname, search } = location;
  if (!authenrization(pathname)) {
    let returnurl = "?returnurl=" + encodeURIComponent(pathname + search);
    return (<Redirect to={{ pathname: "/account/login", search: returnurl }}></Redirect>);
  }
  if(!View)
    return <View404 {...props} />;
  if(!authorization({pathname})){
    return <ViewForbid {...props}></ViewForbid>
  }
  return <View {...props} />;
}

//认证
const authenrization=({pathname})=>{
  let userInfo= UserInfo.getUserInfo();
  if (!userInfo) {
    return false;
  }
  return true;
}

//授权
const authorization=({pathname})=>{
  return true;
}

const MatchView = (props) => {
  const {location}=props;
  const{pathname}=location;
  let url=pathname.toLowerCase()+'.js';
  let View = (lstViewComponent.find(x => x.path.indexOf(url) >= 0) || {}).component;
  return (<ViewFilter view={View} {...props} />)
}

ReactDOM.render(<Provider store={store}>
  <BrowserRouter>
    <Switch>
      <Route exact path="/account/login" component={Login}></Route>
      <Route exact path="/" render={x => (<ViewFilter view={IndexMobile} {...x} />)} ></Route>
      <Route component={MatchView} ></Route>
    </Switch>
  </BrowserRouter>
</Provider>, document.getElementById("root"))