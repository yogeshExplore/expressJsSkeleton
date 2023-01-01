import { MongoDb } from '../service/mongo_db.js'
import { Config } from '../config.js'
import { Setting } from '../setting.js'
import { parseError } from '../error/error_handler.js'
import { logger } from '../../app_logging.js'
import { UUID } from 'bson'


class BaseModel {
    constructor(collectionName, dbName = Config.mongodb.database) {
        this.mdb = new MongoDb()
        this.connection = this.mdb.getConnection()
        this.db = this.connection.db(dbName)
        this.collName = collectionName
        this.collection = this.db.collection(this.collName)
        this.pageLimit = Setting.pageLimit
    }

    async bakeGetQuery(pk, urlQuery, sortBy, page = 1, projection = null) {
        const query = { dbQuery: {} };
        const sortQuery = [];

        if (pk) {
            query.dbQuery['_id'] = UUID(pk)
            const cursor = await this.collection.findOne(query.dbQuery)
            return cursor
        }

        if (urlQuery) {
            for (const k in urlQuery) {
                if (k in Setting.nonQueryParams === false) {
                    query.dbQuery[k] = urlQuery.k
                }
            }
        }

        const cursor = this.collection.find(query['db_query'], { skip: this.pageLimit * (page - 1), limit: this.pageLimit });

        return cursor

    }

    getFromArray(err, documents) {
        if (err) {

        }

    }

    async get(pk, urlQuery, sortBy, page = 1) {
        try {
            const cursor = await this.bakeGetQuery(pk, urlQuery, sortBy, page)
            if (pk) {
                const modalData = {
                    data: cursor
                }
                return modalData;
            }
            else {
                const docs = await cursor.toArray().then(function (documents) {
                    return documents;
                }).catch(function (error) {
                    throw error
                })
                const modalData = {
                    data: docs,
                    page: page,
                    totalPages: ''
                }
                return modalData;
            }
        } catch (error) {
            logger.error(`[MONGODB] Unable to get data query=${pk}|${urlQuery}, error=${error}`)
            return parseError('SD001', `${pk}|${urlQuery}`, String(error), error)
        }
    }

    add(jsonBody) {
        try {
            const modelResponse = this.collection.insertOne(jsonBody)
            const modalData = {
                _id: modelResponse,
                success: modelResponse
            }
            return modalData;
        } catch (error) {
            logger.error(`[MONGODB] Unable to add data query, error=${error}`);
            return parseError('SD001', 'Unable to add data', Strign(error), error);
        }
    }
}

export { BaseModel }
