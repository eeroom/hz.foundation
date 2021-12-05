import axios from 'axios'
import docCookies from '../utils/docCookies';
import constdict from '../utils/constdict';
import { message } from 'antd';

const host = "http://localhost:8084";
let token="";
axios.interceptors.request.use(x=>{
    x.withCredentials=true;
   x.headers["Authorization"] =token;
   return x;
});
axios.interceptors.response.use(x=>{
    token=x.headers["Authorization"]||token;
    if(!!token)
        docCookies.setItem(constdict.authentication,"ok");
    return x;
})



function    apiinvoker(a,b,c){
    let url=`${host}/${a.constructor.name}/${b}`;
    return function (parameter) {
       return axios.post(url,parameter)
        .then(x=>{
            console.log("apiinvoker操作成功",x);
            token=x.headers["Authorization"];
            console.log("token",token);
            if(x.data.code!=200){
                message.error(x.data.message||"程序内部错误！请稍后再试！");
                throw new Error(x.data.message||"程序内部错误！请稍后再试！");
            }
            return x.data;
        })
        .catch(x=>{
            message.error("服务器或网络异常！请稍后再试！");
            throw new Error("服务器或网络异常！请稍后再试！");
        });
    }
}

export default apiinvoker