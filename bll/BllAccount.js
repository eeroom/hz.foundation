import Bll from './Bll'
import httpclient from '../utils/httpclient'
import api from '../utils/api'
import helper from '../utils/helper'
class  BllAccount extends Bll{

    constructor(parameter){
        super(parameter);
        this.namespace=BllAccount.name;
    }

    async login(parameter,callback){
        //let rt=await httpclient.post(api.Account.Login,parameter);
        if(parameter.password!=="admin2019"){
            callback({status:false,msg:"密码错误"})
            return;
        }
        helper.localStorage.setUserInfo(parameter);
        callback({status:true});
    }
}

export default BllAccount;