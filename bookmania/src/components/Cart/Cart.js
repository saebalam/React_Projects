
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import './cart.css'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup';
import card from '../../Assets/Images/card.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash,faSquareMinus,faSquarePlus } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
    const [cartItems, setCartItems] = useState([])
    // const [cartSize,setCartSize]=useState(cartItems.length)
    const [refreshCart, setRefreshCart] = useState(cartItems.length)
    const [quantity,setQuantity]=useState(1)

    useEffect(() => {
        axios.get('/cart')
            .then(
                res => {
                    // console.log("res",res.data);
                    setCartItems(res.data)
                    setRefreshCart(cartItems.length + 1)
                }
            )
    }, [refreshCart])

    const decreaseQuantity=(id)=>{
        console.log(id);
        if(quantity>1){
            setQuantity(quantity-1)
        }
    }
    const increaseQuantity=(id)=>{
        console.log(id);
        setQuantity(quantity+1)
    }


    const handleRemoveFromCart = (id) => {
        console.log("id to rem", id);

        console.log("beforecart length", cartItems.length)
        axios.post(`/removeItem/${id}`)
            .then(console.log("added"))
            .then(setRefreshCart(cartItems.length - 1))
        // console.log("id",id)
        // console.log("cart length",cartItems.length)
    }

    return (
        <div className='main-div' >
            {(cartItems.length === 0)
                ?
                <div style={{ margin: "0 auto" }}>
                    <h2>Cart is Empty !!!!</h2>
                    <h4>Please add something to cart :)</h4>
                    <Link to='/'>Home</Link>
                </div>
                :
                <div className='submain-div'>
                    <table>
                        <tr className='table-heading'>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>remove</th>
                        </tr>


                        {cartItems.map((cartItem) => {
                            return <tr key={cartItem.id} className="cartCard">

                                <td className='td1'>
                                    {/* {console.log("props", props.props)} */}
                                    <div >
                                        <img src={card} alt="" style={{width:"170px"}} />
                                    </div>

                                    <div className="my-list-group-flush">
                                        <div>{cartItem.title}</div>
                                        <div>{cartItem.rating}</div>
                                        <div>{cartItem.price}</div>
                                    </div>
                                </td>

                                <td className='td2'>
                                    <div style={{ display: 'flex' }} className="quantity">
                                        <button onClick={decreaseQuantity}><FontAwesomeIcon icon={faSquareMinus} /></button>
                                        <input type="text" name="" id="" value={quantity} style={{width:'45px', lineHeight:'3px',margin:"0px 5px"}}  />
                                        <button onClick={()=>increaseQuantity(cartItem.id)}><FontAwesomeIcon icon={faSquarePlus} /></button>
                                    </div>
                                </td>
                                <td className='td3'>
                                    <div className='amount'>
                                        Price
                                    </div>
                                </td>
                                <td className='td4'>
                                    <div >
                                        <button onClick={() => handleRemoveFromCart(cartItem.id)} className="removeBtn"><FontAwesomeIcon icon={faTrash} /> </button>
                                    </div>
                                </td>



                            </tr>
                        }
                        )}


                    </table>
                    
                </div>

            }
        </div>
    )
}

export default Cart