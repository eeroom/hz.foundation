import React from 'react'
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
const defaultOption={
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
}

class Chart extends React.Component {
    chartElement;
    constructor(parameter) {
        super(parameter)
        this.chartElement = React.createRef()
    }

    componentDidMount() {
        const { current } = this.chartElement
        let {title,tooltip,chartOption} =this.props;
        chartOption=chartOption||defaultOption;
        chartOption.title=title||chartOption.title;
        chartOption.tooltip=tooltip||chartOption.tooltip;
        
        var chart = echarts.init(current);
        // 绘制图表
        chart.setOption(chartOption);
    }
    render() {
        const{height=300}=this.props;
        return (<div ref={this.chartElement} style={{
                width: '100%',
                height: height,
            }}
        />)
    }
}

export default Chart;