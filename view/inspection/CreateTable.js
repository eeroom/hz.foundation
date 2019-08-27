import React from 'react'
import Chart from '../../component/Chart'

const Repeater=({data,...props})=>{
    console.log("Repeater",data);
    return data.map((item,index)=>{
        return React.cloneElement(props.children,{...props,item,index});
    });
}

const MChart=({item,index,...props})=>{
    console.log("MChart",index)
   return (<Chart {...props} title={{text:item}} height={500} />);
}

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
            <Repeater data={['扣分汇总','整改效率分析','扣分汇总','整改效率分析','扣分汇总','整改效率分析','扣分汇总','整改效率分析']}>
                <MChart></MChart>
            </Repeater>
            <Chart title={{text:"扣分汇总"}}  height={500} />
            <Chart title={{text:"整改效率分析"}}  />


            {/* {
                window.lstIcons.map(x=>(<img style={{height:48,width:48,marginLeft:24,marginTop:24}} src={"/"+x}></img>))
            } */}
        </div>)
    }
}

export default CreateTable;