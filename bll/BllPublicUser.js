import Bll from './Controller'
class  BllPublicUser extends Bll{

    constructor(parameter){
        super(parameter);
        this.namespace=BllPublicUser.name;
    }

    add({count}){
        this.setState({count})
    }
}

export default BllPublicUser;