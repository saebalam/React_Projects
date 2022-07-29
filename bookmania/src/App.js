import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Header/Navbar';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import axios from 'axios';
import {Provider} from 'react-redux'
import  store  from './store';
import Tempp from './components/Tempp';
import Cart from './components/Cart/Cart';

function App() {

  // store.subscribe(()=>console.log("store",store.getState()))
  const [userData, setUserData] = useState(null)                  //to check a user is loggedin
  const [featuredProducts,setFeaturedProducts] = useState(null)

  const setUser=(user)=>{
    setUserData(user)
  }

  useEffect(() => {
    axios.get('user')
      .then((res) => {
        const isLoggedin = localStorage.getItem('token')
        // console.log(isLoggedin)
        // console.log("/user",res.data)
        if (isLoggedin == "true") {
          setUser(res.data)
        }
      })

  }, [userData])

  // useEffect(() => {
  //   axios.get('user/featuredProducts')
  //     .then((res) => {
  //       const isLoggedin = localStorage.getItem('token')
  //       console.log(isLoggedin)
  //       console.log(res.data)
  //       if (isLoggedin == "true") {
  //         setFeaturedProducts(res.data)
  //       }
  //     })

  // }, [])

  

  return (
    
      <div className="App">
      <Router>
        <Navbar userData={userData} />
        <Routes>
          <Route exact path='/' element={<Home userData={userData} />} />
          <Route exact path='/login' element={<Login userData={userData} setUser={setUser} />} />
          <Route exact path='/wishlist' element={<Login />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='register' element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
