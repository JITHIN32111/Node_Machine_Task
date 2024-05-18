import express from 'express'
const routes = express.Router();
import auth from '../middleware/auth.js'
import {getAllProducts,addProducts} from '../controllers/productController.js'
routes.get('/', auth, getAllProducts);
routes.post('/addProduct', addProducts);


export default routes;
