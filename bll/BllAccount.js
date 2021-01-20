import Bll from './Bll'
import httpclient from '../utils/httpclient'
import {foundation} from '../utils/api'
import helper from '../utils/helper'
class  BllAccount extends Bll{

    constructor(parameter){
        super(parameter);
        this.namespace=BllAccount.name;
    }

    async login(parameter,callback){
        //let rt=await httpclient.post(foundation.Account.Login,parameter);
        let rt={ status:true, msg:"登陆成功" };
        console.log("rt",rt);
        helper.localStorage.setUserInfo(parameter);
       return rt;
    }
}

export default BllAccount;