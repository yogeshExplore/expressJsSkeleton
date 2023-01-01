import { UUID } from "bson"
import { ec } from "./error_code.js"
import { lanStr } from "../language/response_text.js"
import { Config } from "../../index.js"


export function parseError(code, details, description=null, exc=null) {
    const requestUuid = new UUID().toString()
    const errors = [
        {
            requestUuid: requestUuid,
            code: code,
            httpCode: ec[code] || 500,
            message: lanStr[Config.appLanguage]['eM'][code] || 'Unhandled Case',
            details: details, 
            description: description,
            exc: String(exc)
        }
    ]
    return {
        errors: errors
    }
}
