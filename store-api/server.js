const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Product = require('./models/Product');

const app = express();

app.use(bodyParser.json());

//MongoDB Connection
mongoose.connect(
    'mongodb://localhost:27017/store', 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(()=>
    console.log("Connection to MongoDB is Successfull")
).catch((err)=>
    console.error(err)
);

app.get('/', (req, res)=>{
    res.send('Server is up and running');
})

app.listen('3000', () =>
    console.log('Server is up and running on PORT 3000')
);

//Create a Product - Insert a Product
app.post('/products', async (req, res) => {
    console.log(req);
    try
    {
        const product = new Product(req.body);
        await product.save();
        res.status(201).send(product);
    }
    catch(err)
    {
        res.status(500).send(err);
    }
});

//Get All Products
app.get('/products', async(req, res)=> {
    try {
        const products = await Product.find();
        res.send(products);
    }
    catch(err)
    {
        res.status(500).send(err);
    }    
});

//Get Product By Id
app.get('/products/:id', async (req, res)=> {
    try
    {
        const product = await Product.findById(req.params.id);
        res.send(product);
        if(!product){
            res.status(404).send('Not Found');
        }
    }
    catch(err)
    {
        res.status(500).send(err);
    }
});

//Update/PUT product
app.put('/products/:id', async (req, res)=> {
    try
    {
        const porduct = await Product.findByIdAndUpdate(req.params.id, req.body, {new:true});
        res.send(porduct);
    }
    catch(err)
    {
        req.status(500).send(err);
    }
});

app.delete('/products/:id', async (req, res)=> {
    try
    {
        const product = await Product.findByIdAndDelete(req.params.id);
        res.send(product);
    }
    catch(err){
        req.status(500).send(err);
    }
});
