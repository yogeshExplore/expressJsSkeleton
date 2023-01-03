import { logger } from "../../index.js";
import { Twitter } from "../service/twitter.js";
import {BaseController} from "./base_controller.js"


export class TwitterController extends BaseController {
    constructor(){
        super()
        this.service = new Twitter();
    }

    async getRecentSearch(searchTerm){
        const [isOk, serviceData] = await this.service.recentSearch(searchTerm);
        if (!isOk) {
            logger.error(`[TWITTER] Error in fetching twitter data ${JSON.stringify(serviceData)}`);
        }
        return serviceData;
    }
}
