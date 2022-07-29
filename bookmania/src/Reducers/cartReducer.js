const istate={
    cartProducts:[]
}

const cartReducer=(state=istate,action)=>{
    // console.log("reducer ",action.payload);
    switch(action.type){
        case("addToCart"): return {
            // action.payload.map(user=>user.id)
            cartProducts:[...state.cartProducts , action.payload]
        }
        default: return state
    }
}

export default cartReducer