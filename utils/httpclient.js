import axios from 'axios'
const host = "http://localhost:58781"
const httpcleint = {
    get(url, parameter) {
        return axios.get(host + url, parameter).catch(x => console.log("catch", x));
    },
    post(url, parameter) {
        return axios.post(host+url,parameter)
        .then(x=>{
            console.log("操作成功",x);
            return x.data.result;
        })
        .catch(x=>{
            console.log("操作失败",x);
            return x;
        });

        // return new Promise((ok,notok)=>{
        //     let value1,value2;
        //     axios.post(host+url,parameter)
        //     .then(x=>{
        //         value1=x.data.result;
        //         value1&&value2&&ok({value1,value2});
        //     });
        //     axios.post(host+url,parameter)
        //     .then(x=>{
        //         value2=x.data.result;
        //         value1&&value2&&ok({value1,value2});
        //     });
        // })

        // return new Promise((ok, notok) => {
        //     axios.post(host + url, parameter)
        //         .then(x => {
        //             console.log("操作成功", x);
        //             //return x.data.result;
        //             ok(x.data.result)
        //         })
        //         .catch(x => {
        //             console.log("操作失败", x);
        //             //return x;
        //             notok(x);
        //         });
        // });
    },
}

export const _request = (url, parameter) => {
    return httpcleint.post(url, parameter)
        .then(data => data)
        .catch(err => {
            console.error(err)
        })
}


export default httpcleint;