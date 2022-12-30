import { Config } from './app/config.js'
import { Setting } from './app/setting.js'
import { logger } from './app_logging.js'

import express from 'express'
import mongoose from 'mongoose'

const skeleton = express()

skeleton.get('/status', (req, res) => {
    res.send(`Application ${Config.appName} is running successfully`)
})

skeleton.listen(Config.port, Config.bindIp, () => {
    logger.info(`${Config.appName} successfully running on ${Config.bindIp}:${Config.port}`);
})
