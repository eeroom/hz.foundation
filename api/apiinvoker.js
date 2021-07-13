import axios from 'axios'
const host = "http://localhost:58781"

function    apiinvoker(a,b,c){
    let url=`${host}/${a.constructor.name}/${b}`;
    return function (parameter) {
       return axios.post(url,parameter)
        .then(x=>{
            console.log("apiinvoker操作成功",x);
            return x.data.result;
        })
        .catch(x=>{
            console.log("apiinvoker操作失败",x);
            return x;
        });
    }
}

export default apiinvoker