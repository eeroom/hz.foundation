import Bll from './Controller'
class  BllPublicUser extends Bll{

    constructor(parameter){
        super(parameter);
        this.namespace=BllPublicUser.name;
    }

    add(parameter){
        let{count}=parameter;
        this.setState({count})
    }
}

export default BllPublicUser;