
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import './cart.css'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup';
import card from '../../Assets/Images/card.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
    const [cartItems, setCartItems] = useState([])
    useEffect(() => {
        axios.get('/cart')
            .then(
                res => {
                    console.log("res",res.data);
                    setCartItems(res.data)
                }
            )
    }, [],console.log("cart",cartItems))

    const handleRemoveFromCart=(id)=>{
        axios.post('/removeItem',id)
        .then(()=>console.log("added"))
        console.log("id",id)
    }

    return (
        <div className='cart-container'>
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
    )
}

export default Cart