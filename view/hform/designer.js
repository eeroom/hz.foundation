import React from 'react'
import { Row, Col, PageHeader,Input,Checkbox  } from 'antd'

const TextArea=Input.TextArea;

class Designer extends React.Component {
    constructor(parameter) {
        super(parameter)
        this.state = {
            hformUI: ""
        }
    }
    render() {
        return (<Row>
            <Col xs={12}>
                <PageHeader title="代码区" />
                <TextArea
                    onChange={x=>this.setState({hformUI:x.target.value})}
                    placeholder=""
                    autosize={{ minRows: 48 }}
                />
            </Col>
            <Col xs={12}>
            <PageHeader title="效果图" />
            <div dangerouslySetInnerHTML= {{ __html:this.state.hformUI }}></div>
            
            </Col>
        </Row>)
    }
}

export default Designer;