import Bll from './Bll'
import httpclient from '../utils/httpclient'
import api from '../utils/api'

class  BllHomeIndexMobile extends Bll{

    constructor(parameter){
        super(parameter);
        this.namespace=BllHomeIndexMobile.name;
    }

}

export default BllHomeIndexMobile;