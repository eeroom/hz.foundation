import React from 'react'
import ReactDOM from 'react-dom'
import { Row, Col, PageHeader,Input,Checkbox  } from 'antd'
import { Breadcrumb } from 'antd';
const TextArea=Input.TextArea;

class Designer extends React.Component {
    constructor(parameter) {
        super(parameter)
        this.state = {
            hformUI: ''
        }
    }
    render() {
       window.htt='234533';
        // let MyC=()=> React.createElement(this.state.hformUI);
        return (<Row>
            <Col xs={12}>
                <PageHeader title="代码区" />
                <TextArea
                    value={this.state.hformUI}
                    onChange={x=>this.setState({hformUI:x.target.value})}
                    placeholder=""
                    autosize={{ minRows: 48 }}
                />
            </Col>
            <Col xs={12}>
            <PageHeader title="效果图" />
            <div onLoad={x=>console.log("divload",x)} onClick={x=>{
                    console.log("divclick",x.target);
                    x.target.value='hht'

            }} dangerouslySetInnerHTML= {{ __html:this.state.hformUI }}></div>
            {/* <MyC></MyC> */}
            </Col>
        </Row>)
    }
}

export default Designer;