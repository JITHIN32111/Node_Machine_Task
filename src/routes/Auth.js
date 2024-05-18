import  express  from "express";
import { register } from '../controllers/authController.js';
const routes = express.Router();


routes.get("/register",register)

export default routes;