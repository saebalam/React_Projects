import React from 'react'
import './navbar.css'
import { Link, Outlet } from 'react-router-dom'

function Navbar(props) {

    let button;
    console.log("userData is", props.userData)

    const logout = () => {
        localStorage.removeItem('token')
        props.setUser(null)
    }


if (props.userData) {
    button = <ul className='navbar-nav ms-auto'>
        <li className='nav-item'>
            <Link to="/" onClick={logout} className='nav-link'>Logout</Link>
        </li>
        <li className='nav-item'>
            <Link to='/register' className='nav-link'>Wishlist</Link>
        </li>
        <li className='nav-item'>
            <Link to='/cart' className='nav-link'>Cart</Link>
        </li>
    </ul>
} else {
    button = <ul className='navbar-nav ms-auto'>
        <li className='nav-item'>
            <Link to="/login" className='nav-link'>Login</Link>
        </li>
        <li className='nav-item'>
            <Link to='/login' className='nav-link'>Wishlist</Link>
        </li>
        <li className='nav-item'>
            <Link to='/login' className='nav-link'>Cart</Link>
        </li>

    </ul>
}


return (
    <div>
        <nav className='navbar navbar-expand-sm navbar-dark bg-dark fixed-top' style={{padding:"7px"}}>
            {/* <div className='container1'> */}
                <Link to='/' className='navbar-brand'>BookMania</Link>
                <div id='search' ><input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" /></div>
                
                <button className="navbar-toggler" style={{ fontSize: "0.7rem", padding: "0.5rem 0.5rem",marginTop:"0px" }} type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id='navbarNav'>
                    {button}
                </div>
            {/* </div> */}
        </nav >
        {/* <Outlet /> */}
    </div>
)
}

export default Navbar