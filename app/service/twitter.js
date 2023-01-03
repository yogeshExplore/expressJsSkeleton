import axios from "axios";
import { Config } from "../../index.js";
import { parseError } from "../error/error_handler.js";



export class Twitter{
    constructor(){
        this.apiKey=Config.twitter.apiKey;
        this.apiSecret=Config.twitter.apiSecret;
        this.apiToken=Config.twitter.apiToken;
        this.baseUrl='https://api.twitter.com';
        this.apiVersion='2';
        this.apiUrl=`${this.baseUrl}/${this.apiVersion}`;
        this.headers = { Authorization: `Bearer ${this.apiToken}`}
    }

    // todo call request to handle retry and response validations
    async recentSearch(searchTerm){
        const url = `${this.apiUrl}/tweets/search/recent`
        const urlQuery = {query:searchTerm}
        const axiosConfig = {
            params: urlQuery,
            headers: this.headers
        }
        try{
            const apiResponse = await axios.get(url, axiosConfig)
            if ( apiResponse && apiResponse.status===200){
                return [true, apiResponse.data]
            }
            else {
                throw new Error(`Invalid response or status code,response=${apiResponse}`)
            }

        } catch (error) {
            return [false, parseError('SE001', 'Twitter API error', url, error)]
        }

    }
}