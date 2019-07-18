import Controller from './Controller'
import httpclient from '../utils/httpclient'
import api from '../utils/api'

class  AccountController extends Controller{

    constructor(parameter){
        super(parameter);
        this.namespace=AccountController.name;
    }

    async login(parameter){

        // new Promise((ok,notok)=>notok(4)).then(x=>console.log("promiseThen",x))
        // .catch(x=>console.log("promisCatch",x));

        console.log("parameter",parameter)
        // let rt=await httpclient.post(api.Account.Login,parameter);
        // console.log("rt",rt);
        let rtWrapper= await new Promise((ok,notok)=>{
            let value1,value2;
            httpclient.post(api.Account.Login,parameter)
            .then(x=>{
                value1=x;
                value1&&value2&&ok({value1,value2})
            })
            httpclient.post(api.Account.Login,parameter)
            .then(x=>{
                value2=x;
                value1&&value2&&ok({value1,value2})
            })
        });
        console.log("rtWrapper",rtWrapper);

        // httpclient.post(api.Account.Login,parameter)
        // .then(x=>console.log("rt",x));
    }
}

export default AccountController;