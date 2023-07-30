import React from 'react'
import {Link} from 'react-router-dom'
import logo from "../assets/Logo.svg"

const Navbar = (props) => {
    let loggedIn=props.loggedIn
  return (
    <div className='flex justify-evenly'>
        <Link to='/'>
           <img src={logo} alt="Logo" width={160} height={32} loading='lazy'/>
        </Link>

        {/* Pages Home-About-Contact us */}
         <nav >
            <ul className='flex gap-3'>
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="#">About</Link>
                </li>

                <li>
                    <Link to="#">Contact Us</Link>
                </li>
            </ul>
         </nav>

         {/* Login-signup-logout-Dashboard */}

         <div className='flex gap-3'>
            {
                !loggedIn &&
                <button>
                    <Link to="/login">Login</Link>
                </button>
            }

            {
                !loggedIn &&
                <button>
                    <Link to="/signup">Signup</Link>
                </button>
            }

            {
                loggedIn &&
                <button>
                    <Link to="/login">Logout</Link>
                </button>
            }
            {
                loggedIn &&
                <button>
                    <Link to="/dashboard">Dashboard</Link>
                </button>
            }
         </div>

    </div>
  )
}

export default Navbar;