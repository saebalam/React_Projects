import axios from 'axios'
import React, { useState, useEffect } from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel';
import carousel1 from '../../Assets/Images/carousel1.jpg'
import carousel2 from '../../Assets/Images/carousel2.jpg'
import carousel3 from '../../Assets/Images/carousel3.jpg'

import './home.css'
import CardSmall from '../Shared_Components/CardSmall';
import { Link } from 'react-router-dom';

function Home({userData,featuredProducts}) {
    // console.log("in home",props.userData);
    
    return (
        <div style={{ marginTop: '100px' }}>
            {userData == null
                ?
                <div>
                    <h1><Link to='/login'>Please Login</Link></h1>
                </div>
                :
                <div>

                    {/* banner */}
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
                                    src={carousel3}
                                    alt="Third slide"
                                />

                                <Carousel.Caption>

                                    <p>
                                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>

                    {/* Featured products */}
                    
                    <div className='featured-products-container'>
                    {(featuredProducts) && (
                        featuredProducts.map((product)=>{
                        console.log("product",product);
                        const {id,title,rating,price}=product
                        return <CardSmall props={{id,title,rating,price}}/>
                    }))
                    }
                    
                    </div>


                </div>
            }
        </div>
    )
}

export default Home