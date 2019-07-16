import Controller from './Controller'
class  PublicUser extends Controller{

    constructor(parameter){
        super(parameter);
        this.namespace=PublicUser.name;
    }

    add({count}){
        this.setState({count})
    }
}

export default PublicUser;