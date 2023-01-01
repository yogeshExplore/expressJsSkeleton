import {BaseModel} from '../model/base_model.js'

class Identity extends BaseModel {
    constructor() {
        const collName = 'user'
        const dbName = 'identity'
        super(collName, dbName)
    }
}

export {Identity}