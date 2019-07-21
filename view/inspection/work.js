import React from 'react';
import { NavBar, Icon } from 'antd-mobile';
import myimg from '../../data/jc.png'

class Work extends React.Component{

    render(){
        const { leverOneCategory = '',history={} } = this.props;
        let lst=[]
        for (let index = 0; index < 100; index++) {
                 lst[index]=index;       
                        
        }
        console.log("myimg",myimg)
        return (<div>
            <NavBar
                style={{position:"fixed",width:'100%',top:0}}
                mode="dark"
                icon={<Icon type="left" />}
                rightContent={[
                    <Icon key="1" type="ellipsis" />,
                  ]}
                onLeftClick={() => history.goBack()}
            >本次检查</NavBar>
            <div style={{paddingTop:50}}>
                <img src={"/"+myimg} />
            </div>
        </div>);
    }
}

export default Work