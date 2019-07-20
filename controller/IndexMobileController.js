import Controller from './Controller'
import httpclient from '../utils/httpclient'
import api from '../utils/api'
import {UserInfo} from '../utils/helper'
class  IndexMobileController extends Controller{

    constructor(parameter){
        super(parameter);
        this.namespace=IndexMobileController.name;
    }

}

export default IndexMobileController;