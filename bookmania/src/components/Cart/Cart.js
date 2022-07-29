
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import './cart.css'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup';
import card from '../../Assets/Images/card.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
    const [cartItems, setCartItems] = useState([])
    // const [cartSize,setCartSize]=useState(cartItems.length)
    const[refreshCart,setRefreshCart]=useState(cartItems.length)
    useEffect(() => {
        axios.get('/cart')
            .then(
                res => {
                    // console.log("res",res.data);
                    setCartItems(res.data)
                }
            )
    }, [refreshCart])



    const handleRemoveFromCart=(id)=>{
        console.log("id to rem",id);
        
        console.log("cart length",cartItems.length)
        axios.post(`/removeItem/${id}`)
        .then(console.log("added"))
        .then(setRefreshCart(cartItems.length-1))
        // console.log("id",id)
        // console.log("cart length",cartItems.length)
    }

    return (
        <div className='cart-container'>
            {(cartItems.length===0) 
             ?
             <div style={{margin:"0 auto"}}>
                <h2>Cart is Empty !!!!</h2>
                <h4>Please add something to cart :)</h4>
                <Link to='/'>Home</Link>
             </div>
             :
             <div>
                {cartItems.map(cartItem=>{
                return <Card style={{ width: '18rem', minWidth: '15rem', margin: "10px" }}>
                {/* {console.log("props", props.props)} */}
                <Card.Img variant="top" src={card} />
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>{cartItem.title}</ListGroup.Item>
                    <ListGroup.Item>{cartItem.rating}</ListGroup.Item>
                    <ListGroup.Item>{cartItem.price}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <button onClick={()=>handleRemoveFromCart(cartItem.id)}><FontAwesomeIcon icon={faTrash} /> </button>
                    <button >Buy Now</button>
                </Card.Body>
            </Card>
            })
            }
             </div>

            }
        </div>
    )
}

export default Cart