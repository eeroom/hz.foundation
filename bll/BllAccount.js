import Bll from './Bll'
import account from '../apiInterface/account'
import apiinvoker from '../apiInterface/apiinvoker'

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
       return rt;
    }
}

export default BllAccount;