import React from 'react';
import { Layout, Menu,  Icon } from 'antd';
import { Link } from 'react-router-dom'
import { lstmenuTree } from './menuTree'
const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

class LayoutFluid extends React.Component {

  constructor(parameter) {
    super(parameter)
  }

  render() {
    let navindex = 0;
    let openkeys=lstmenuTree[navindex].children.map(x=>x.id);
    return (<Layout>
      <Header className="header" style={this.styleHeader}>
        <Menu  theme="dark" mode="horizontal" defaultSelectedKeys={['0']} style={{ lineHeight: '64px' }}>
          {lstmenuTree.map(x=>this.renderMenuItem(x))}
        </Menu>
      </Header>
      <Sider width={180} style={this.styleSider}>
        <Menu mode="inline" defaultOpenKeys={openkeys} defaultSelectedKeys={[openkeys[0]]}  style={{ height: '100%' }}>
          {lstmenuTree[navindex].children.map(x=>this.renderSiderItem(x))}
        </Menu>
      </Sider>
      <Content style={this.styleContent}>
        {this.props.children}
      </Content>
      <Footer style={this.styleFooter}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
    )
  }

  renderSiderItem = (item) => {
    if (!item.children)
      return this.renderMenuItem(item, true);
    return this.renderSubmenu(item);
  }

  renderSubmenu = (item) => (
    <SubMenu key={item.id} title={this.renderSubTitle(item)}>
      {
        item.children.map(x => this.renderMenuItem(x))
      }
    </SubMenu>)

  renderMenuItem = (item, showIcon) => (
    <Menu.Item key={item.id}>
      {
        showIcon && (<Icon type="inbox" />)
      }
      <span >
        <Link to={item.path}>{item.name}</Link>
      </span>
    </Menu.Item>
  )

  renderSubTitle = (item) => (
    <span>
      <Icon type="user" />
      {item.name}
    </span>)
  
  styleSider = {
    overflow: 'none',
    height: '100vh',
    position: 'fixed',
    left: 0,
    paddingTop: 64,
    zIndex: 99
  }

  styleHeader = { position: 'fixed', zIndex: 999, width: '100%', }

  styleContent = {
    padding: '0 10px', marginTop: 64, marginLeft: 180,
    minHeight: 300, marginBottom: 32
  }
  styleFooter = { textAlign: 'center', position: 'fixed', bottom: 0, left: 0, width: '100%', zIndex: 1, height: 30, padding: 0 }
}

export default LayoutFluid