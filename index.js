import express, { json, urlencoded } from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./config/db.js";
import Auth from './src/routes/Auth.js'
import Products from './src/routes/Products.js'
import Cart from './src/routes/Cart.js'
dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

app.use("/api/auth", Auth);
app.use('/api/products',Products );
app.use('/api/cart',Cart);
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
