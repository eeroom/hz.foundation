import React from 'react'
import { List, InputItem, WhiteSpace, Button } from 'antd-mobile';
import { createForm } from 'rc-form';
import BllAccount from '../../bll/BllAccount'
import { message } from 'antd';
const bll = new BllAccount();
class Login extends React.Component {
  componentDidMount() {
    this.autoFocusInst.focus();
  }
  handleClick = () => {
    this.inputRef.focus();
  }
  render() {
    console.log("prop", this.props);
    const { form, history } = this.props;

    const { getFieldProps } = form;
    return (
      <div>
        <div>督察管理系统</div>
        <InputItem {...getFieldProps('loginName')} clear placeholder="请输入用户名" 
             ref={el => this.autoFocusInst = el}>用户名</InputItem>
        <WhiteSpace />
        <InputItem {...getFieldProps('password')} type="password" placeholder="****">密码</InputItem>
        <WhiteSpace />
        <Button type="primary"
          onClick={x=>form.validateFields((err,formValue)=>!err&& this.handlerBtnLoginOnClick(formValue))}
        >登陆</Button>
      </div>
    );
  }

  handlerBtnLoginOnClick =async (formValue) => {
    console.log("formValue", formValue)
    let rt = await bll.login(formValue)
    const { history } = this.props;
    const { location } = history;
    const { search = '' } = location;
    message.info("登陆成功");
    window.setTimeout(function (params) {
      let target = search.replace("?returnurl=", '') || "/"
      target = decodeURIComponent(target);
      console.log("target", target)
      history.push(target);
    }, 1000);
  }
}

export default createForm()(Login);