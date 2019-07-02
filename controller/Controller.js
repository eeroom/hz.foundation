export default class Controller{
    namespace=''

    dispatch=''

    getState=''

    setState=(data)=>{
        let storevalue=this.getState();
        this.dispatch({type:"hz",data:{...storevalue,...data}});
    }
}