import express from 'express'
const routes = express.Router();
import auth from '../middleware/auth.js'
import {getAllProducts,addProducts} from '../controllers/productController.js'
routes.get('/', auth, getAllProducts);
routes.post('/add', addProducts);


export default routes;
