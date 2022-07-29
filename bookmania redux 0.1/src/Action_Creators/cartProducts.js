const cartProducts=(cartProducts)=>{
    // console.log("in action payload",featuredProducts);
    return {
        type: 'addToCart',
        payload: cartProducts
    }
}

export default cartProducts