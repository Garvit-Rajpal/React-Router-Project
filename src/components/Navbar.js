import React from 'react'
import {Link} from 'react-router-dom'
import logo from "../assets/Logo.svg"
import { toast } from 'react-hot-toast'

const Navbar = (props) => {
    let loggedIn=props.loggedIn
    let setIsLoggedIn=props.setIsLoggedIn;
  return (
    <div className='flex justify-between py-4 items-center mx-auto w-11/12 max-w-[1160px] '>
        <Link to='/'>
           <img src={logo} alt="Logo" width={160} height={32} loading='lazy'/>
        </Link>

        {/* Pages Home-About-Contact us */}
         <nav >
            <ul className='flex gap-x-6 text-richblack-100'>
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
                <button className='bg-richblack-800 text-richblack-100 
                py-[8px] px-[12px] border border-richblack-700 rounded-[8px]'>
                    <Link to="/login">Login</Link>
                </button>
            }

            {
                !loggedIn &&
                <button className='bg-richblack-800 text-richblack-100 
                py-[8px] px-[12px] border border-richblack-700 rounded-[8px]'>
                    <Link to="/signup">Signup</Link>
                </button>
            }

            {
                loggedIn &&
                <button className='bg-richblack-800 text-richblack-100 
                py-[8px] px-[12px] border border-richblack-700 rounded-[8px]'>
                    <Link to="/login" onClick={()=>{
                          setIsLoggedIn(false);
                          toast.success("Logged Out");
                    }
                    }>Logout</Link>
                </button>
            }
            {
                loggedIn &&
                <button className='bg-richblack-800 text-richblack-100 
                py-[8px] px-[12px] border border-richblack-700 rounded-[8px]'>
                    <Link to="/dashboard">Dashboard</Link>
                </button>
            }
         </div>

    </div>
  )
}

export default Navbar;