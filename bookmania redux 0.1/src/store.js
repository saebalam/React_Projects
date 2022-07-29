import { createStore,applyMiddleware, combineReducers } from 'redux'
import thunk from "redux-thunk"
import logger from 'redux-logger'
import homePageReducer from './Reducers/homePageReducer'
import cartReducer from './Reducers/cartReducer'


const rootReducer=combineReducers({ 
    homePageReducer:homePageReducer,
    cartReducer:cartReducer
})

const store = createStore(rootReducer,applyMiddleware(thunk,logger))
store.subscribe(()=>console.log("store ind",store.getState()))

export default store 

