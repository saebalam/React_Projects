import axios from 'axios'
import React, { useState, useEffect, useRef,CSSProperties } from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ScaleLoader from "react-spinners/ScaleLoader"; 
import { useDispatch, useSelector } from 'react-redux';
import homePageProducts from '../../Action_Creators/homePageProducts'
import cartProducts from '../../Action_Creators/cartProducts'
import Carousel from 'react-bootstrap/Carousel';
import carousel1 from '../../Assets/Images/carousel1.jpg'
import carousel2 from '../../Assets/Images/carousel2.jpg'
import carousel4 from '../../Assets/Images/carousel4.jpg'

import './home.css' 
import CardSmall from '../Shared_Components/CardSmall';
import { Link } from 'react-router-dom';

const override: CSSProperties = {
    position:"relative",
    display: "block",
    margin: "0 auto",
    borderColor: "red",
   
  };

const Home=React.memo(({userData})=> {
    // console.log("in home",props.userData);
    const forOnceRender=useRef(0)
    // const userObject = useMemo(() => first, [second]);

    const dispatch = useDispatch()
    const featuredProductsObject=useSelector(state=>state.homePageReducer)
    const [spinner,setSpinner]=useState(true)


        const fetchUser = () => {
            return function (dispatch) {
                axios.get('user/featuredProducts')
                    .then(res => {
                        const isLoggedin = localStorage.getItem('token')
                        if (isLoggedin === "true") {
                            console.log("in fetch");
                            console.log("resdata",featuredProductsObject.featuredProducts);
                            if(featuredProductsObject.featuredProducts.length<1){ //workaround for stop re-rendering of home
                                res.data.forEach(obj=>dispatch(homePageProducts(obj)))
                                setSpinner(false)
                            }
                            
                        }if(userData==null){
                            setSpinner(false)
                        }
                    })
            }
        
        }

        useEffect(() => {
          console.log("in useffect");
          dispatch(fetchUser())
        },[])


        
    
    // console.log("bbj",featuredProducts);

    return (
        <div style={{ marginTop: '100px' }}>
            {(spinner == true)
                ?
                <div>
                    <ScaleLoader color="blue" loading={spinner} cssOverride={override} size={150} />
                </div>
                :
                <div> 
                    {(userData==null)&&
                    <h1><Link to='/login'>Please Login</Link></h1>}

                    {/* banner */}
                    {(userData!=null) &&
                        <div className='wrapper'>
                        
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={carousel1}
                                    alt="First slide"
                                />
                                <Carousel.Caption>

                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum &#9733; .</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={carousel2}
                                    alt="Second slide"
                                />

                                <Carousel.Caption>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={carousel4}
                                    alt="Third slide"
                                />

                                <Carousel.Caption>

                                    <p>
                                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>}

                    {/* Featured products */}
                    {/* <button onClick={()=>dispatch(fetchUser())}>click</button> */}
                    <div className='featured-products-container'>
                    {(featuredProductsObject.featuredProducts) && (
                        
                        featuredProductsObject.featuredProducts.map((product)=>{
                        console.log("product",product);
                        const {id,title,src,rating,price}=product
                        return <CardSmall props={{id,title,src,rating,price}}/>
                    }))
                    }
                    
                    </div>
            


                </div>  
            }
        </div>
    )
})

export default Home