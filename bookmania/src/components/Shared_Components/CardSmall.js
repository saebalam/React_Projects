import React,{useState} from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup';
import card from '../../Assets/Images/card.jpg'
import card2 from '../../Assets/Images/card2.jpg'
import card3 from '../../Assets/Images/card3.jpg'
import card4 from '../../Assets/Images/card4.jpg'
import card5 from '../../Assets/Images/card5.jpg'
import card6 from '../../Assets/Images/card6.jpg'
import card7 from '../../Assets/Images/card7.jpg'
import card8 from '../../Assets/Images/card2.jpg'
import './CardSmall.css'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import cartProducts from '../../Action_Creators/filteredProducts';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHeart,faHeartCircleCheck,faCartPlus, faCheck } from '@fortawesome/free-solid-svg-icons'
import {toast,Toaster} from 'react-hot-toast';

const CardSmall = (props) => {
    // toast.configure()

    // const dispatch = useDispatch()
    const [cartIcon,setCartIcon]=useState(faCartPlus)
    const [wishlistIcon,setWishlistIcon]=useState(faHeart)

    const handleCart = (id)=>{
        if(cartIcon==faCartPlus){
            const obj={...props.props,quantity:1}
            console.log("props.props",obj)
            axios.post('/addToCart',obj)
            .then( setCartIcon((cartItem) => (cartItem === faCartPlus ? faCheck : faCartPlus)))
        }else{
            
                // axios.post(`/removeItem/${props.props.id}`)
                // .then(console.log("added"))
                // .then(setRefreshCart(cartItems.length-1))
                // .then( setCartIcon((cartItem) => (cartItem === faCartPlus ? faCheck : faCartPlus)))
        }
    }

    const handleWishlist=(props)=>{
        axios.post('/addToWishlist',props)
            .then(setWishlistIcon((wishlistIcon) => (wishlistIcon === faHeart ? faHeartCircleCheck : faHeart)))
    }
    
    return (
        <Card style={{ Width:'13rem',minWidth:"12.7rem",maxHeight:"321px",margin:"10px"}} className="card-small">
            {/* {console.log("props src",props.props.src)} */}
            <Card.Img variant="top" style={{maxHeight:"200px" }} src={props.props.src} />
            <ListGroup className="list-group-flush">
                <ListGroup.Item style={{padding:"2px 5px"}}>{props.props.title}</ListGroup.Item>
                <ListGroup.Item style={{padding:"2px 5px"}}>{props.props.rating}</ListGroup.Item>
                <ListGroup.Item style={{padding:"2px 5px"}}>{props.props.price}</ListGroup.Item>
            </ListGroup>
            <Card.Body style={{padding:"3px 5px"}}>
                <button onClick={()=>handleWishlist(props.props)}><FontAwesomeIcon icon={wishlistIcon} className="heartButton" /></button>
                {/* <button onClick={()=>{dispatch(cartProducts(props.props)) }}><FontAwesomeIcon icon={faCartPlus} /></button> */}
                <button onClick={()=>handleCart(props.props.id)} ><FontAwesomeIcon icon={cartIcon} className="cartButton"  /></button>
            </Card.Body>
        </Card>
    )
}

export default CardSmall