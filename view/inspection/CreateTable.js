import React from 'react'
import Chart from '../../component/Chart'

class CreateTable extends React.Component {
    echartsElement;
    constructor(parameter) {
        super(parameter)
        this.echartsElement = React.createRef()
    }

    componentDidMount() {
    }
    render() {
        return (<div>
            <Chart title={{text:"扣分汇总"}} height={500} />
            <Chart title={{text:"整改效率分析"}}  />
            {
                window.lstIcons.map(x=>(<img style={{height:48,width:48,marginLeft:24,marginTop:24}} src={"/"+x}></img>))
            }
        </div>)
    }
}

export default CreateTable;