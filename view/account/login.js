import React from 'react'
import { List, InputItem, WhiteSpace,Button } from 'antd-mobile';
import { createForm } from 'rc-form';
import AccountController from '../../controller/AccountController'
const accountController=new AccountController();
class Login extends React.Component {
  componentDidMount() {
     this.autoFocusInst.focus();
  }
  handleClick = () => {
    this.inputRef.focus();
  }
  render() {
    const { getFieldProps } = this.props.form;
    return (
        <div>
            <div>督察管理系统</div>
            <InputItem
                {...getFieldProps('UserName')}
                clear
                placeholder="请输入用户名"
                ref={el => this.autoFocusInst = el}
            >用户名</InputItem>
            <WhiteSpace />
            <InputItem
                {...getFieldProps('Pwd')}
                type="password"
                placeholder="****"
            >密码</InputItem>
            <WhiteSpace />
            <Button type="primary"
            onClick={x=>accountController.login({loginName:"changxyxa",password:"admin2019"})}
            >登陆</Button>
        </div>
    );
  }
}

export default createForm()(Login);