import axios from 'axios'
const host="http://localhost:58781"
const httpcleint={
    get(url,parameter){
        return axios.get(host+url,parameter).catch(x=>console.log("catch",x));
    },
    post(url,parameter){
        //new Promise(axios.post(host+url,parameter).catch(x=>console.log("catch",x)))
        return axios.post(host+url,parameter)
        .then(x=>{
            console.log("操作成功",x);
            return x.data.result;
        })
        .catch(x=>{
            console.log("操作失败",x);
            return x;
        });
    }
}


export default httpcleint;