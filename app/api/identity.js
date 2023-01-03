import express from 'express'
import { IdentityController } from '../controller/identity_controller.js'
import { securityMiddleware } from '../middleware/security.js'

export const identityRouter = express.Router()
const ic = new IdentityController()


// todo needs admin key
identityRouter.get('/', securityMiddleware({permissionType:'admin'}), async (req, res) => {
  const jsonResponse = await ic.get();
  res.status(200);
  res.json(jsonResponse);
  res.send();
})

// define the about route
identityRouter.get('/:uuid', securityMiddleware(), async (req, res) => {
  const uuid = req.params.uuid;
  const urlQuery = req.query;
  const jsonResponse = await ic.get(uuid, urlQuery);
  res.status(200);
  res.json(jsonResponse);
  res.send();
})

