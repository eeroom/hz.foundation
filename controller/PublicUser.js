import Controller from './Controller'
class  PublicUser extends Controller{

    add=({count})=>{
        this.setState({count})
    }
}

const publicUser=new PublicUser();

export default publicUser;