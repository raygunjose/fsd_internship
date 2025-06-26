const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//Connection String MongoDB
mongoose.connect("mongodb://localhost:27017/store", {
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const db = mongoose.connection;
db.once('open', ()=>console.log('Connnected to MongoDb'));

//Product Schema
const productSchema = new mongoose.Schema({
    title: String,
    description: String,
    imageurl: String,
});

const Product = mongoose.model('Product', productSchema);

//API Routes
//POST API - CREATE
app.post('/products', async (req, res)=>{
   const product = await new Product(req.body);
   await product.save();
   res.send(product);
});

//GET API - READ
app.get('/products', async (req, res)=>{
    const products = await Product.find();
    res.send(products);
});

//GET API - READ A SPECIFIC DATA USING ID
app.get('/products/:id', async (req, res)=>{
    const product = await Product.findById(req.params.id);
    res.send(product);
});

//PUT
app.put('/products/:id', async(req, res)=>{
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.send(product);
});

//DELETE
app.delete('products/:id', async (req, res)=>{
    await Product.findByIdAndDelete(req.params.id);
    res.send({message:"Deleted Successfully"});
});

app.listen(5000, ()=>{console.log('Server is running on http://localhost:5000')});