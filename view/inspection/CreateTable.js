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
        </div>)
    }
}

export default CreateTable;