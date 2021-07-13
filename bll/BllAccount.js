import Bll from './Bll'
import httpclient from '../utils/httpclient'
import {foundation} from '../utils/api'
import helper from '../utils/helper'
import account from '../api/account'
import apiinvoker from '../api/apiinvoker'

let apiaccount=new Proxy(new account(),{get:(x,y,z)=>apiinvoker(x,y,z)})
class  BllAccount extends Bll{

    constructor(parameter){
        super(parameter);
        this.namespace=BllAccount.name;
    }

    async login(parameter){
        //let rt=await httpclient.post(foundation.Account.Login,parameter);
        let rt=await apiaccount.login(parameter);
        //let rt={ status:true, msg:"登陆成功" };
        console.log("rt",rt);
        helper.localStorage.setUserInfo(parameter);
       return rt;
    }
}

export default BllAccount;