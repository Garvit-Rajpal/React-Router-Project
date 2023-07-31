import React from 'react'
import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const LoginForm = ({setIsLoggedIn}) => {
    const [formData,setFormData]=useState({
        email:"",password:""
    })
    const [showPassword,setShowPassowrd]=useState(false);

    const navigate=useNavigate();
    function clickHandler(event){

        setFormData((prev)=>(
            {
                ...prev,
                [event.target.name]:event.target.value
            }
        ))

    }
    function submitHandler(event){
        event.preventDefault();
        toast.success("Logged In");
        navigate("/dashboard");
        setIsLoggedIn(true);
        


    }

  return (
    <form onSubmit={submitHandler}>
        <label>
            <p>Email Address <sup className='text-red-500'>*</sup></p>
            <input
             className='w-full bg-richblack-800 p-3 rounded-md my-2 border-b-[2px] border-solid border-richblack-700 '
             type="email"
             name="email"
             onChange={clickHandler}
             placeholder='Enter Email Address'
             value={formData.email}
            ></input>
        </label>

        <label className='relative'>
            <p>Password <sup className='text-red-500'>*</sup></p>
            <input
             className='relative w-full bg-richblack-800 p-3 rounded-md my-2 border-b-[2px] border-solid border-richblack-700 '
             type={showPassword?("text"):("password")}
             name="password"
             onChange={clickHandler}
             value={formData.password}
             placeholder='Enter Password'
            ></input>
            <span className='absolute bottom-[1px] right-3 text-2xl text-richblack-100 cursor-pointer   z-10'
             onClick={()=>setShowPassowrd((prev)=>!prev)}>
               {showPassword?<AiOutlineEye></AiOutlineEye>:<AiOutlineEyeInvisible></AiOutlineEyeInvisible>}
            </span>
        </label>
        <button className='flex justify-center items-center w-full p-2 rounded-md text-black my-4 bg-yellow-50' >
            Sign In
        </button>
    </form>
  )
}

export default LoginForm