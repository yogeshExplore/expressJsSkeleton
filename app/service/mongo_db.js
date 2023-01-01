import {MongoClient} from 'mongodb'
import { logger, Config } from '../../index.js'

class MongoDb {
    constructor() {
        this.connectionParameter = new Map();
        this.connection = null;

    }

    setConnectionParameter(user, password, host, port, database, extras = {}) {
        this.connectionParameter.set('user', user ? user : Config.mongodb.user);
        this.connectionParameter.set('password', password ? password : Config.mongodb.password);
        this.connectionParameter.set('host', host ? host : Config.mongodb.host);
        this.connectionParameter.set('port', port ? port : Config.mongodb.port);
        this.connectionParameter.set('database', database ? database : Config.mongodb.database);
        this.connectionParameter.set('extras', extras);
    }

    getConnectionParameter(){
        return this.connectionParameter
    }

    setConnection() {
        if (this.connectionParameter.size === 0){
            this.setConnectionParameter();
        }
        logger.info(`[MONGODB] Setting MongoDb Connection for ${this.connectionParameter.get('host')}:${this.connectionParameter.port}`);
        try {
            const urii = `mongodb://${this.connectionParameter.get('user')}:${this.connectionParameter['password']}@${this.connectionParameter['host']}:${this.connectionParameter['port']}`;
            const uri = `mongodb://${this.connectionParameter.get('host')}:${this.connectionParameter.get('port')}`;
            const client = new MongoClient(uri, this.connectionParameter.get('extras'));
            this.connection = client;
            this.connection.connect()
        } catch (error) {
            logger.error(`[MONGODB] Error in making connection for ${this.connectionParameter.host}:${this.connectionParameter.port}`,error);
            this.connection = null
            throw new Error(error)
        }
    }

    getConnection() {
        if (this.connection === null) {
            this.setConnection();
        }
        return this.connection;
    }

    closeConnection(){
        this.connection = null;
    }
}

export {MongoDb}
