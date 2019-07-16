export default class Controller{
    namespace;

    dispatch(parameter){
        return Controller.dispatch(parameter);
    }

    getState(){
        return Controller.getState();
    }



    setState=(data)=>{
        this.dispatch({type:"hz",namespace:this.namespace,data});
    }
}