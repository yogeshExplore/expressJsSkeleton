import dotenv from 'dotenv'
dotenv.config({ 'path': '.env', override: true })


class Config {

    static appName = process.env.APP_NAME;
    static appInstanceName = process.env.APP_INSTANCE_NAME;
    static bindIp = process.env.BIND_IP;
    static port = Number(process.env.PORT);
    static worker = process.env.WORKERS;

    static environment = process.env.ENVIRONMENT;
    static appLanguage = process.env.APP_LANGUAGE;
    static region = process.env.REGION;

    static logLevel = process.env.LOG_LEVEL;
    static logFileInfo = process.env.LOG_FILE_INFO;
    static logErrorInfo = process.env.LOG_FILE_ERROR;

    static skeletonReadApiKey = process.env.SKELETON_READ_API_KEY;
    static skeletonWriteApiKey = process.env.SKELETON_WRITE_API_KEY;
    static skeletonAdminApiKey = process.env.SKELETON_ADMIN_API_KEY;


    static mongodb = {
        user: process.env.MONGODB_USER,
        password: process.env.MONGODB_PASSWORD,
        host: process.env.MONGODB_HOST,
        port: process.env.MONGODB_PORT,
        database: process.env.MONGODB_DATABASE
    }
}

console.log(`Trying to bootup ${Config.appName}`);
export { Config };