import Product from "../models/Product.js";
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
export const addProducts = async (req, res) => {
  const { name, price, description } = req.body;
  try {
    const products = new Product({
      name,
      price,
      description,
    });
    await products.save();
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
