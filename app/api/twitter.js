///tweets/search/recent
import express from 'express'
import { securityMiddleware } from '../middleware/security.js';
import { TwitterController } from '../controller/twitter_controller.js';

export const twitterRouter = express.Router();
const tc = new TwitterController();


twitterRouter.get('/tweets/search/recent', securityMiddleware(), async (req, res)=>{
    const urlQuery = req.query;
    const searchTerm = urlQuery.searchTerm
    const jsonResponse = await tc.getRecentSearch(searchTerm);
    // todo pass through parseResponse to check if error is present 
    res.status(200);
    res.json(jsonResponse);
    res.send();
})