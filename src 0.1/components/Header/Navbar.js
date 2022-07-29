import React from 'react'
import {Link, Outlet} from 'react-router-dom'

function Navbar() {
    return (
        <div>
        <nav className='navbar navbar-expand-sm navbar-dark bg-dark fixed-top '>
            <div className='container '>
                <Link to='/' className='navbar-brand'>BookMania</Link>
                <button className="navbar-toggler" style={{fontSize:"0.7rem",padding:"0.5rem 0.5rem"}}  type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id='navbarNav'>
                    <ul className='navbar-nav ms-auto'>
                        <li className='nav-item'>
                            <Link to="/login" className='nav-link'>Login</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/register' className='nav-link'>Wishlist</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/register' className='nav-link'>Cart</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav >
        <Outlet />
        </div>
    )
}

export default Navbar