import { Config } from './app/config.js'
import { Setting } from './app/setting.js'
import { logger } from './app_logging.js'
import { identityRouter } from './app/api/identity.js'
import express from 'express'

const skeleton = express()

skeleton.use('/identity', identityRouter);

skeleton.get('/status', (req, res) => {
    const response = {
        data: {
            message:`Application ${Config.appName} is running successfully`,
        }

    }
    res.status(200)
    res.json(response)
    res.send()
})

skeleton.listen(Config.port, Config.bindIp, () => {
    logger.info(`${Config.appName} successfully running on ${Config.bindIp}:${Config.port}`);
})


export {logger, Config, Setting, skeleton}