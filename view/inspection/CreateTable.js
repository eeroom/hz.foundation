import React from 'react'
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/pie'

class CreateTable extends React.Component {
    echartsElement;
    constructor(parameter) {
        super(parameter)
        this.echartsElement = React.createRef()
    }

    componentDidMount() {
        console.log("this.echartsElement", this.echartsElement)
        const { current } = this.echartsElement
       
        var myChart = echarts.init(current);
        // 绘制图表
        myChart.setOption({
            title: { text: 'ECharts 入门示例' },
            tooltip: {},
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
    }
    render() {
        return (<div ref={this.echartsElement} style={{
                width: '100%',
                height: 300,
            }}
        />)
    }
}

export default CreateTable;