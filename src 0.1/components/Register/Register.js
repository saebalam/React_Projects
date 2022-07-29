import React, { useState } from 'react'

function Register() {
    const [fname,setFname]=useState("")
    const [lname,setLname]=useState("")
    const [email,setEmail]=useState("")
    const [number,setNumber]=useState("")
    const [password,setPassword]=useState("")
    const [confirmPassword,setConfirmPassword]=useState("")

    const handleRegisterForm=(e)=>{
        e.preventDefault()
        console.log(fname,lname);
    }

  return (
    <div style={{marginTop:'120px'}}>
        <form onSubmit={handleRegisterForm} className='m-auto col-lg-3'>
            <h3>Register</h3>
            <div className="form-group">
                <label htmlFor="" className=''>First Name</label>
                <input type="text" className='form-control' name="" id="" placeholder='Enter email or number'
                value={fname} onChange={(e)=>setFname(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="">Last Name</label>
                <input type="text" className='form-control' name="" id="" placeholder='Enter your password'
                value={lname} onChange={(e)=>setLname(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="">email</label>
                <input type="text" className='form-control' name="" id="" placeholder='Enter your password'
                value='' onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="">Number</label>
                <input type="text" className='form-control' name="" id="" placeholder='Enter your password'
                value='' onChange={(e)=>setNumber(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="">Password</label>
                <input type="text" className='form-control' name="" id="" placeholder='Enter your password'
                value='' onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="">Confirm Password</label>
                <input type="text" className='form-control' name="" id="" placeholder='Enter your password'
                value='' onChange={(e)=>setConfirmPassword(e.target.value)} />
            </div>
            <div className="form-group">
                <button className='btn btn-primary' >Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Register