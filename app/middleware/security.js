import { authenticateRead, authenticateWrite, authenticateAdmin } from "../auth/api_key.js";
import { parseError } from "../error/error_handler.js";

// The structure is bit complex to support all todos
// todo get api fron source
// todo admin key to be used for get all
// todo api authentication 
// todo give access to source only 
// todo oauth2 
// handle return , modify global var based on authentication 
//write should have read acess also, admin should have read access also

const readMethod = new Set(['GET'])
const writeMethod = new Set(['POST', 'PUT'])
const adminMethod = new Set(['DELETE'])

function getPermissionType(req) {
    if (readMethod.has(req.method)) {
        return 'read'
    }
    if (writeMethod.has(req.method)) {
        return 'write'
    }
    if (adminMethod.has(req.method)) {
        return 'admin'
    }
}

export function securityMiddleware(obj={}) {
    return function (req, res, next) {
        const apiKey = req.headers['x-api-key'];
        let authResponse = {};
        let permissionType = obj['permissionType'] || getPermissionType(req)
        switch (permissionType) {
            case 'read': authResponse = authenticateRead(apiKey);
            break;
            case 'write': authResponse = authenticateWrite(apiKey);
            break;
            case 'admin': authResponse = authenticateAdmin(apiKey);
            break;
            default: authResponse = {};
        }

        if (authResponse && authResponse.isAuthenticated){
            // todo set global
            next();
        }
        else{
            const errors = parseError('SA001', 'Invalid API Key');
            res.status(401);
            res.json(errors);
            res.send();
        }
    }
}
;
