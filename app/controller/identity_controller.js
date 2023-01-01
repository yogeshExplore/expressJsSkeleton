import { Identity } from "../model/identity.js";
import {BaseController} from "./base_controller.js"


class IdentityController extends BaseController {
    constructor(){
        super()
        this.model = new Identity()
    }

    async get(pk='', urlQuery='', sortBy='', page=1){
        const modalData = await this.model.get(pk, urlQuery, sortBy, page)
        return modalData;
    }
}

export {IdentityController}