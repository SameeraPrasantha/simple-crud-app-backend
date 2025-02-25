
const Product = require('../Models/product.model.js');

const getProducts = async (req,res)=>{
        try{
            const products = await Product.find({});
            res.status(200).json(products);
        }
        catch(error){
            res.status(404).json({message: error.message});
        }
}

const getProduct = async (req,res)=>{
    try{
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    }
    catch(error){
        res.status(404).json({message: error.message});
    }
}

const createProduct = async (req,res)=>{
    try{
        const product = await Product.create(req.body);
        res.status(201).json({message: "Product created successfully"});
       }
       catch(error){
        res.status(404).json({message: error.message});
       }
}

const updateProduct = async (req,res)=>{
    try{
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!product){
            res.status(404).json({message: "Product not found"});
        }else{
            res.status(200).json({message: "Product updated successfully"});
        }
    
    }
    catch(error){
        res.status(500).json({message: error.message});
    } 
}

const deleteProduct = async (req,res)=>{
    try{
        const product = await Product.findByIdAndDelete(req.params.id);
        if(!product){
            res.status(404).json({message: "Product not found"});
        }else{
            res.status(200).json({message: "Product deleted successfully"});
        }
    
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct 
};