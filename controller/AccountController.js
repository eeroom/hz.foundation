import Controller from './Controller'
import httpclient from '../utils/httpclient'
import api from '../utils/api'
import {UserInfo} from '../utils/helper'
class  AccountController extends Controller{

    constructor(parameter){
        super(parameter);
        this.namespace=AccountController.name;
    }

    async login(parameter,callback){
        //let rt=await httpclient.post(api.Account.Login,parameter);
        if(parameter.password!=="admin2019"){
            callback({status:false,msg:"密码错误"})
            return;
        }
        UserInfo.setUserInfo(parameter);
        callback({status:true});
    }
}

export default AccountController;