import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux';
import { Provider,connect } from 'react-redux'
import publicUser from '../controller/PublicUser'
class MyPage extends React.Component{
  constructor(parameter){
    super(parameter)
  }

  render(){
    console.log("prop",this.props)
    let {msg,[publicUser.namespace]:userInfo}=this.props
    let {count}=userInfo;
    return(<div>
      <p>{msg}</p>
      <div>总数：{count}</div>
      <button onClick={x=>publicUser.add({count:count+1})}>点我+1</button>
      </div>)
  }
}

const MyPageWrapper=connect(x=>{
  console.log("connetMapProp",x);
  return x;
},x=>{
  console.log("mapDispath",x);
  return {dispatch:x};
})(MyPage);

let store = createStore((st, ac) => {
  console.log("st", st);
  console.log("ac", ac);
  if (ac.data)
    return { ...st, ...ac.data };
  return st;
}, {});

window.NT=store;

publicUser.namespace="publicUser";
publicUser.dispatch=store.dispatch;
publicUser.get=store.getState

ReactDOM.render(<Provider store={store}>
  <MyPageWrapper msg={"hello world"}></MyPageWrapper>
</Provider>,document.getElementById("root"))