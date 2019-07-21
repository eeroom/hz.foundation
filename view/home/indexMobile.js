import React from 'react';
import { connect } from 'react-redux'
import { TabBar, List, Card } from 'antd-mobile';
import { Grid } from 'antd-mobile';
import { NavBar, Icon } from 'antd-mobile';
import { jcTree, convertToArray,jcReportTree } from '../../data/menu'
import IndexMobileController from '../../controller/IndexMobileController'

const Item = List.Item;
let bllIndexMobile = new IndexMobileController();

let tabicon = {
    "zhifu": {
        normal: { background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }
        , selected: { background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }
    },
    "koubei": {
        normal: { background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }
        , selected: { background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }
    },
    "friend": {
        normal: { background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }
        , selected: { background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }
    },
    "me": {
        normal: { uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }
        , selected: { uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }
    }
}

class IndexMobile extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        console.log("this.props", this.props)
        const { selectedTabId = 'dl', leverOneCategory = '' } = this.props;
        let { leverOneCategoryCode, text = '提示信息' } = leverOneCategory;
        if (selectedTabId == 'dl')
            text = '选择大类'
        let lstdl = [
            { text: "现场检查", icon: "https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png", leverOneCategoryCode: 1 }
            , { text: "视频检查", icon: "https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png", leverOneCategoryCode: 2 }
            , { text: "巡查", icon: "https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png", leverOneCategoryCode: 3 }
            , { text: "中秋节检查", icon: "https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png", leverOneCategoryCode: 4 }
        ]
        return (
            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                {(selectedTabId !== 'me') && (<NavBar rightContent={[
                    <Icon key="1" type="ellipsis" />,
                ]} mode="dark" style={{ position: "fixed", top: 0, width: '100%', zIndex: 998 }}>{text}</NavBar>)}
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    prerenderingSiblingsNumber={0}
                >
                    <TabBar.Item title="大类" key="dl"
                        selected={selectedTabId === 'dl'}
                        onPress={() => bllIndexMobile.setState({ selectedTabId: "dl" })}
                        icon={<div style={{ ...tabicon.zhifu.normal, width: '22px', height: '22px', }} />}
                        selectedIcon={<div style={{ ...tabicon.zhifu.selected, width: '22px', height: '22px', }} />}
                    >
                        <div style={{ paddingTop: 45 }}>
                            <Grid data={lstdl} hasLine={false} columnNum={2}
                                onClick={(el, index) => bllIndexMobile.setState({ leverOneCategory: { ...el }, selectedTabId: "jc" })}
                            />
                        </div>
                    </TabBar.Item>
                    <TabBar.Item title="检查" key="jc"
                        selected={selectedTabId === 'jc'}
                        onPress={() => bllIndexMobile.setState({ selectedTabId: "jc" })}
                        icon={<div style={{ ...tabicon.koubei.normal, width: '22px', height: '22px', }} />}
                        selectedIcon={<div style={{ ...tabicon.koubei.selected, width: '22px', height: '22px', }} />}
                    >
                        {
                            this.renderJC(selectedTabId)
                        }
                    </TabBar.Item>
                    <TabBar.Item title="报表" key="report"
                        icon={<div style={{ ...tabicon.friend.normal, width: '22px', height: '22px', }} />}
                        selectedIcon={<div style={{ ...tabicon.friend.selected, width: '22px', height: '22px', }} />}
                        selected={selectedTabId === 'report'}
                        onPress={() => bllIndexMobile.setState({ selectedTabId: "report" })}
                    >
                        {
                            this.renderBB(selectedTabId)
                        }
                    </TabBar.Item>
                    <TabBar.Item title="我" key="me"
                        icon={tabicon.me.normal}
                        selectedIcon={tabicon.me.selected}
                        selected={selectedTabId === 'me'}
                        onPress={() => bllIndexMobile.setState({ selectedTabId: "me" })}
                        data-seed="logId"
                    >
                        <Card>
                            <Card.Header
                            thumbStyle={{height:48,width:48}}
                                title="张三"
                                thumb="http://image.baidu.com/search/down?tn=download&word=download&ie=utf8&fr=detail&url=http%3A%2F%2Fpic26.nipic.com%2F20130116%2F1773545_152734135000_2.jpg&thumburl=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D4253815709%2C2032032765%26fm%3D26%26gp%3D0.jpg"
                                extra={<span>西安石油公司</span>}
                            />
                            <Card.Body>
                                <List >
                                    <Item data-seed="logId">账号：zhangsanxa</Item>
                                    <Item wrap>部门：业务运作部</Item>
                                    <Item wrap>角色：业务运作部主任</Item>
                                    <Item wrap>关于系统：督察管理系统Ver2.1.2</Item>
                                    <Item wrap>设备信息：{window.navigator.userAgent}</Item>
                                </List>
                            </Card.Body>
                        </Card>

                    </TabBar.Item>
                </TabBar>
            </div>
        );
    }

    renderJC = (selectedTabId) => {
        let styldisplay = selectedTabId === 'jc' ? {} : { display: 'none', }
        const { leverOneCategory = '', history = {} } = this.props;
        const { leverOneCategoryCode, text = '提示信息' } = leverOneCategory;
        let lst = convertToArray(jcTree);
        lst.forEach((e, i, l) => e.parent = l.find(a => a.id === e.parentId));
        lst.forEach((e, i, l) => e.parent && e.parent.children.push(e));
        lst = lst.filter(x => !x.parent);
        return (<div style={{ paddingTop: 45 }}>
            {
                !leverOneCategory && <div>请首先选择大类</div>
            }
            {
                leverOneCategory && lst.map(x => (
                    <div key={x.id}>
                        <div style={{ color: "#888", "fontSize": " 14px", padding: " 15px 0 9px 15px" }}>{x.name}</div>
                        <Grid
                            hasLine={true} columnNum={3}
                            data={x.children.map(a => ({ ...a, text: a.name, icon: "https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png" }))}
                            onClick={x => history.push(x.path)}
                        />
                    </div>
                ))
            }
        </div>)
    }

    renderBB = (selectedTabId) => {
        let styldisplay = selectedTabId === 'jc' ? {} : { display: 'none', }
        const { leverOneCategory = '', history = {} } = this.props;
        const { leverOneCategoryCode, text = '提示信息' } = leverOneCategory;
        let lst = convertToArray(jcReportTree);
        lst.forEach((e, i, l) => e.parent = l.find(a => a.id === e.parentId));
        lst.forEach((e, i, l) => e.parent && e.parent.children.push(e));
        lst = lst.filter(x => !x.parent);
        return (<div style={{ paddingTop: 45 }}>
            {
                !leverOneCategory && <div>请首先选择大类</div>
            }
            {
                leverOneCategory && lst.map(x => (
                    <div key={x.id}>
                        <div style={{ color: "#888", "fontSize": " 14px", padding: " 15px 0 9px 15px" }}>{x.name}</div>
                        <Grid
                            hasLine={true} columnNum={3}
                            data={x.children.map(a => ({ ...a, text: a.name, icon: "https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png" }))}
                            onClick={x => history.push(x.path)}
                        />
                    </div>
                ))
            }
        </div>)
    }
}

export default connect(x => ({ ...x[bllIndexMobile.namespace] }))(IndexMobile)