import React from 'react'
import ReactDOM from 'react-dom'
class MyPage extends React.Component{
  constructor(parameter){
    super(parameter)
  }

  render(){
    let {msg}=this.props
    return(<div>{msg}</div>)
  }
}

ReactDOM.render(<MyPage msg={"hello world"}></MyPage>,document.getElementById("root"))