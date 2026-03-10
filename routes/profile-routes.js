import express from "express";
import { getNumbers, getProfile } from '../controllers/profile-controller.js';

const routes = express.Router();

routes.get('/', getNumbers);

routes.get('/profile', getProfile);

export default routes;