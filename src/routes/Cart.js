import  express  from "express";
import { addToCart ,removeFromCart} from '../controllers/cartController.js';
const routes = express.Router();
import auth from "../middleware/auth.js";

routes.post('/add', auth, addToCart);
routes.post('/remove', auth, removeFromCart);

export default routes