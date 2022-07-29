import React, { useState } from 'react'
import './login.css'
import axios from 'axios'
import {BrowserRouter as Redirect, Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Home from '../Home/Home'


function Login() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [isLoggedin,setIsLoggedin]= useState(true)

    const nav=useNavigate()
    

    const handleForm = (e)=>{
        e.preventDefault()
        alert('hello')
        const data={"userInfo":{"email":email,"password":password}}
        const API_DATA=JSON.stringify(data)
        // axios.get('http://localhost:9000/')
        // .then((res)=>setEmail(res))
        axios.post('login',API_DATA,{ headers: {'Content-Type': 'application/json'}})
        .then(res=>
            
            {   
                // console.log(res.data);
                if(res.data==true){
                    localStorage.setItem('token',res.data);
                }else{
                    localStorage.setItem('token',false);
                }
            }
        )
            nav('/register')
    }

  return (
    <div className='login-bg' style={{marginTop:'100px',margnBottom:"20px"}}>
        {!isLoggedin && 
            <div>
                <form onSubmit={handleForm} className='m-auto col-lg-3'>
            <h3>Login</h3>
            <div className="form-group">
                <label htmlFor="" className=''>Email</label>
                <input type="text" className='form-control' name="" id="" placeholder='Enter email or number' 
                value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="">Password</label>
                <input type="text" className='form-control' name="" id="" placeholder='Enter your password'
                value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div className="form-group">
                <button className='btn btn-primary' >Submit</button>
            </div>
        </form>
        <Link replace to='/register'>Register</Link>
            </div>
        }

        {isLoggedin &&
            < Home />
        }


    </div>
  )
}

export default Login