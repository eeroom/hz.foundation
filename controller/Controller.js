export default class Controller{
    namespace=''

    dispatch=''

    getState=''

    setState=(data)=>{
        this.dispatch({type:"hz",namespace:this.namespace,data});
    }
}