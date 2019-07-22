export default class Bll{
    namespace;

    dispatch(parameter){
        return Bll.dispatch(parameter);
    }

    getState(){
        return Bll.getState();
    }



    setState(data){
        console.log("data",data)
        this.dispatch({type:"hz",namespace:this.namespace,data});
    }
}