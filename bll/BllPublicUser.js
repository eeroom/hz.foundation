import Bll from './Controller'
class  BllPublicUser extends Bll{

    constructor(){
        super(BllPublicUser.name);
    }

    add(parameter){
        let{count}=parameter;
        this.setState({count})
    }
}

export default BllPublicUser;