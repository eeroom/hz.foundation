import axios from 'axios'
const host = "http://localhost:8084"
import { message } from 'antd';
let token="";
axios.interceptors.request.use(function(cfg){
    cfg.headers["Authorization"]=token;
});
axios.interceptors.response.use(cfg=>{
    token=token||cfg.headers["Authorization"];
})
function    apiinvoker(a,b,c){
    let url=`${host}/${a.constructor.name}/${b}`;
    return function (parameter) {
       return axios.post(url,parameter)
        .then(x=>{
            console.log("apiinvoker操作成功",x);
            if(x.data.code!=200){
                message.error(x.data.message||"程序内部错误！请稍后再试！");
                return;
            }
            return x.data;
        })
        .catch(x=>{
            message.error(x.data.message||"服务器或网络异常！请稍后再试！");
            console.log("apiinvoker操作失败",x);
            return;
        });
    }
}

export default apiinvoker