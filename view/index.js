import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux';
import { Provider,connect } from 'react-redux'
import PublicUser from '../controller/PublicUser'
import Controller from '../controller/Controller';
const publicUser=new PublicUser();
class MyPage extends React.Component{
  constructor(parameter){
    super(parameter)
  }

  render(){
    console.log("prop",this.props)
    let {msg,count=0}=this.props
    return(<div>
      <p>{msg}</p>
      <div>总数：{count}</div>
      <button onClick={x=>publicUser.add({count:count+1})}>点我+1</button>
      </div>)
  }
}

const MyPageWrapper=connect(({[publicUser.namespace]:myprop={}})=>myprop)(MyPage);

let store = createStore((st, ac) => {
  console.log("st", st);
  console.log("ac", ac);
  if (ac.namespace){
    return { ...st, [ac.namespace]:{...st[ac.namespace],...ac.data} };
  }
   
  return st;
}, {});

window.NT=store;

Controller.dispatch=store.dispatch;
Controller.getState=store.getState;

ReactDOM.render(<Provider store={store}>
  <MyPageWrapper msg={"hello world"}></MyPageWrapper>
</Provider>,document.getElementById("root"))