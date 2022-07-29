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


function App() {

  const [userData, setUserData] = useState(null)
  const [featuredProducts,setFeaturedProducts] = useState(null)

  const setUser=(user)=>{
    setUserData(user)
  }

  useEffect(() => {
    axios.get('user')
      .then((res) => {
        const isLoggedin = localStorage.getItem('token')
        console.log(isLoggedin)
        console.log(res.data)
        if (isLoggedin == "true") {
          setUser(res.data)
        }
      })

  }, [userData])

  useEffect(() => {
    axios.get('user/featuredProducts')
      .then((res) => {
        const isLoggedin = localStorage.getItem('token')
        console.log(isLoggedin)
        console.log(res.data)
        if (isLoggedin == "true") {
          setFeaturedProducts(res.data)
        }
      })

  }, [])

  

  return (
    <div className="App">
      <Router>
        < Navbar userData={userData} setUser={setUser}/>
        <Routes>
          {/* <Route exact path='/' element={< Navbar />}> */}
          <Route exact path='/' element={<Home 
            userData={userData} featuredProducts={featuredProducts} />} />
          <Route exact path='/login' element={<Login setUser={setUser}/>} />
          <Route exact path='/register' element={<Register />} />
          {/* </Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
