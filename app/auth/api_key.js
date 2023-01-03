import { Config } from "../../index.js"

export function authenticateRead(apiKey){
    if (apiKey && apiKey===Config.skeletonReadApiKey){
        const authResponse = {
            isAuthenticated: true,
            source: 'skeleton',
            scope: 'read'
        }
        return authResponse;
    }
}

export function authenticateWrite(apiKey){
    if (apiKey && apiKey===Config.skeletonWriteApiKey){
        const authResponse = {
            isAuthenticated: true,
            source: 'skeleton',
            scope: 'write'
        }
        return authResponse;
    }
}

export function authenticateAdmin(apiKey){
    if (apiKey && apiKey===Config.skeletonAdminApiKey){
        const authResponse = {
            isAuthenticated: true,
            source: 'skeleton',
            scope: 'admin'
        }
        return authResponse;
    }
}
 