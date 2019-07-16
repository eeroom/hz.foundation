import React from 'react'
import PublicUser from '../controller/PublicUser'
import { connect } from 'react-redux'
const publicUser=new PublicUser();

class MyPage2 extends React.Component{
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

  const MyPageWrapper2=connect(({[publicUser.namespace]:myprop={}})=>myprop)(MyPage2);

  export default MyPageWrapper2;
