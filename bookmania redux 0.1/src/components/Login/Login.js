import React, { useState } from 'react'
import './login.css'
import axios from 'axios'
import { BrowserRouter as Redirect, Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Home from '../Home/Home'
import google_signin from '../../Assets/Images/google_signin.png'


function Login(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoggedin, setIsLoggedin] = useState(true)

    const nav = useNavigate()


    const handleForm = (e) => {
        e.preventDefault()
        const data = { "userInfo": { "email": email, "password": password } }
        const API_DATA = JSON.stringify(data)
        // axios.get('http://localhost:9000/')
        // .then((res)=>setEmail(res))
        axios.post('login', API_DATA, { headers: { 'Content-Type': 'application/json' } })
            .then(res => {
                // console.log(res.data);
                if (res.data == true) {
                    localStorage.setItem('token', res.data);
                    props.setUser(res.data)
                    nav('/')
                } else {
                    alert('wrong credentials')
                    localStorage.setItem('token', false);
                }
            }
            )

    }

    return (
        <div className='login' style={{ marginTop: '100px', margnBottom: "20px" }}>
            {isLoggedin &&
                <div>
                    <form onSubmit={handleForm} className='m-auto col-lg-3'>
                        <h3>Login</h3>
                        <div className="form-group">
                            <label htmlFor="" className=''>Email</label>
                            <input type="text" className='form-control' name="" id="" placeholder='Enter email or number'
                                value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Password</label>
                            <input type="password" className='form-control' name="" id="" placeholder='Enter your password'
                                value={password} onChange={(e) => setPassword(e.target.value)} />
                            <div className="forgot-password"><Link replace to='/register'>Forgot Password ?</Link></div>
                        </div>
                        <div className="form-group" id='login-btn'>
                            <button className='btn btn-primary' >Submit</button>
                        </div>
                        <hr></hr>
                        <div className="signup" style={{ marginTop: "3rem" }}>
                            <div><h6>Or</h6></div>
                            <div>
                                <div><a href="#"><img src={google_signin} alt="" style={{ width: "10rem", height: "2rem" }} /></a></div>
                            </div>
                            <div>
                                <Link replace to='/register' style={{color:"black"}}>SIGN UP</Link>
                            </div>
                        </div>
                    </form>
                </div>
            }

            {() => nav("/register")}


        </div>
    )
}

export default Login