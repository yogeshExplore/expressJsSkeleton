import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json' assert {type: 'json'}

export const swaggerRouter = express.Router();

const options = {
  explorer: true
}

swaggerRouter.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));
