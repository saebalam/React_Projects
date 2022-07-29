const express = require('express')
const cors = require('cors')
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();
const cred = require('./Cred')
const featuredProducts = require('./FeaturedProducts')



//database
const cartItems=[]




// add router in express app

app.use("/", router);
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('hello from node')
    console.log("object1");
})

app.get('/user', (req, res) => {
    res.send("hello user")
})

//login
app.post('/login', (req, res) => {
    console.log(req.body.userInfo.email);
    var email = req.body.userInfo.email;
    var password = req.body.userInfo.password;
    console.log("User name = " + email + ", password is " + password);
    if (email == "test" && password == "password") {
        res.send(true);
    } else {
        res.send(false)
    }
});

//homeProducts
app.get('/user/featuredProducts', (req, res) => {
    res.send(featuredProducts)
})


//cart
app.get('/cart',(req,res)=>{
    res.send(cartItems)
})

app.post('/addToCart',(req,res)=>{
    cartItems.push(req.body)
    console.log("cart",cartItems);
})





app.listen(9000, () => {
    console.log('listening on port 9000')
})