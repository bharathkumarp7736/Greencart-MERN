import { v2 as cloudinary } from "cloudinary";
import Product from "../models/product.js";

// addproduct : /api/seller/addproduct
export const addProduct = async (req, res) => {
  try {
    let productData = JSON.parse(req.body.productData);
    const imagesv = req.files;

    let imagesUrl = await Promise.all(
      imagesv.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      }),
    );
    await Product.create({ ...productData, images: imagesUrl });
    res.json({ success: true, message: "Product added successfully" });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

// get product : /api/seller/list
export const productList = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json({ success: true, products });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

// get single product : /api/product/id
export const productById = async (req, res) => {
  try {
    const { id } = req.body;
    const product = await Product.findById(id);
    res.json({ success: true, product });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

// change stock : /api/product/stock
export const changeStock = async (req, res) => {
    try {
        const {id,inStock} = req.body;
        await Product.findByIdAndUpdate(id,{inStock})
        res.json({success:true,message:'Stock status updated'})
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: error.message });
    }
};
