const express = require('express')
const cors = require('cors')
const bodyParser = require("body-parser");
const router = express.Router();
const path = require('path');
const app = express();
const cred = require('./Cred')
const featuredProducts = require('./FeaturedProducts')
const Products = require('./Products')
const PORT=process.env.port || 5000;



//database
var cartItems=[]
var wishlistItems=[]
var filteredProducts=[]


// add router in express app

// app.use(express.static(path.join(__dirname, 'build')));
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('hello from node')
    // console.log("object1");
})

app.get('/user', (req, res) => {
    res.send("hello user")
})

//login
app.post('/login', (req, res) => {
    // console.log(req.body.userInfo.email);
    var email = req.body.userInfo.email;
    var password = req.body.userInfo.password;
    console.log("User name = " + email + ", password is " + password);
    if (email == "test" && password == "password") {
        res.send(true);
    } else {
        res.send(false)
    }
});

// homeProducts
app.get('/user/featuredProducts', (req, res) => {
    res.send(featuredProducts)
})


//searched products

app.post('/products/:query',(req,res)=>{
    const query=req.params.query
    console.log("query",query);
    filteredProducts=Products.filter(product => product.category.toLowerCase().includes(query.toLowerCase()) || query.toLowerCase().includes(product.category.toLowerCase()) )
    // console.log("fil",filteredProducts);
    // console.log("cat",Products[0].category)
    // console.log(Products[0].category.substring(0,2));
    const filteredProductsTitle=filteredProducts.map(filteredProduct=>filteredProduct.title)
    // console.log("filteredProducts",filteredProductsTitle)
    if(filteredProductsTitle.length>0){
        res.send(filteredProductsTitle)
    }else{
        res.status(200)
    }
})


//cart
app.get('/cart',(req,res)=>{
    res.send(cartItems)
})

app.post('/addToCart',(req,res)=>{
    cartItems.push(req.body)
    res.send()
    // console.log("cart",req.body);
})

app.post('/addToWishlist',(req,res)=>{
    console.log("-----------------------------");
    wishlistItems.push(req.body)
    console.log("wishlist",wishlistItems);
    res.send()
})

app.get('/getWishlistItems',(req,res)=>{
    // console.log(wishlistItems);
    res.send(wishlistItems)
})

app.post('/removeFromWishlist/:id',(req,res)=>{
    const id=req.params.id
    console.log("id del wish",id);
    console.log("bef witems",wishlistItems);
    wishlistItems=wishlistItems.filter(item=>item.id!=id)
    console.log("aft witems",wishlistItems);

    res.send()
})

app.get('/getTotalPrice',(req,res)=>{
    res.send(cartItems)
})

app.post('/increaseCartQuantity/:id',(req,res)=>{
    const id=req.params.id
    const ind=cartItems.findIndex(cartItem=>cartItem.id==id)
    cartItems[ind].quantity++
    // console.log("new quan",cartItems)
    res.send()
})

app.post('/decreaseCartQuantity/:id',(req,res)=>{
    const id=req.params.id
    const ind=cartItems.findIndex(cartItem=>cartItem.id==id)
    if(cartItems[ind].quantity>1){
        cartItems[ind].quantity--
    }
    // console.log("new quan",cartItems)
    res.send()
})

app.post('/removeItem/:id',(req,res)=>{
    const id = req.params.id;
    // console.log("id del",id);
    // console.log("before ",cartItems);
    cartItems=cartItems.filter(cartItem=>cartItem.id!=id)
    // console.log("after ",cartItems);
    // console.log(cartItems);
    res.send()
})

// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
// });

if(process.env.NODE_ENV== 'production'){
    app.use(express.static('build'))
}

app.listen(PORT, () => {
    console.log('listening on port 9000')
})