import React from 'react';
import { NavBar, Icon } from 'antd-mobile';
class Work extends React.Component{

    render(){
        const { leverOneCategory = '',history={} } = this.props;
        return (<div>
            <NavBar
                mode="dark"
                icon={<Icon type="left" />}
                onLeftClick={() => history.goBack()}
            >本次检查</NavBar>
            <div>
                选择油站进行检查
            </div>
        </div>);
    }
}

export default Work