import Bll from './Controller'
class  BllPublicUser extends Bll{

    constructor(ns){
        super(ns||BllPublicUser.name);
    }

    add(parameter){
        let{count}=parameter;
        this.setState({count})
    }
}

export default BllPublicUser;