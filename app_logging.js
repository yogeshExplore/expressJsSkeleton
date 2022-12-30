import { Config } from './app/config.js';
import log4js from 'log4js';
import path from 'path';

const logPath = path.join(process.cwd(), '../logs');
const logPattern = '%d{yyyy-MM-dd-hh-mm-ss-SSS}~%p~%f{2}~%l~::%m';

const logConfig = {
    appenders: {
        stdout: {
            type: "console",
            level: Config.logLevel,
            layout: {
                type: "pattern",
                pattern: logPattern
            }
        },
        infoFile: {
            type: "file",
            level: Config.logLevel,
            maxLogSize: 104857600,
            backups: 10,
            filename: path.join(logPath, 'logs', Config.logFileInfo)
        },
        errorFile: {
            type: "file",
            level: "error",
            maxLogSize: 104857600,
            backups: 10,
            filename: path.join(logPath, 'logs', Config.logErrorInfo)
        }
    },
    categories: {
        default: { appenders: ["stdout", "infoFile", "errorFile"], level: Config.logLevel, enableCallStack: true  }
    }
}

log4js.configure(logConfig);

const logger = log4js.getLogger(Config.appName);
logger.info(`[START] Starting application ${Config.appName}`);

export {logger}
