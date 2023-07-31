import React from 'react'
import { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SignupForm = ({setIsLoggedIn}) => {

  const [formData,setFormData]=useState({
    firstName:"",lastName:"",
    email:"",createpassword:"",
    confirmpassword:""
})
const navigate=useNavigate();
const [btn,setBtn]=useState("Student");
const [showPassword1,setShowPassowrd1]=useState(false);

const [showPassword2,setShowPassowrd2]=useState(false);
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
  if(formData.confirmpassword!==formData.createpassword){
    toast.error('Passwords Do not Match');
  }
  else{
    toast.success('Account created');
    setIsLoggedIn(true);

    navigate('/dashboard')
  }
}

function btnClickHandler(){
  setBtn("Student");
}
function btnInsClickHandler(){
  setBtn("Instructor");

}
  return (
    <div className='flex flex-col'>
    <div className='flex items-center bg-richblack-800 w-[250px] justify-between p-1 rounded-full border-b-[2px] border-solid border-richblack-700'>
      <button onClick={btnClickHandler}
      className={`cursor-pointer mx-auto ${btn==="Student"?"bg-richblack-900 w-[50%] py-2 rounded-full ":"bg-richblack-800 w-[50%]"}`}>Student</button>
      <button onClick={btnInsClickHandler}
      className={`cursor-pointer mx-auto ${btn==="Instructor"?"bg-richblack-900 w-[50%] py-2 rounded-full ":"bg-richblack-800 w-[50%]"}`}
      >Instructor</button>
      </div>
    <form onSubmit={submitHandler}>
        <div className='flex my-2 gap-3 w-full'>
        <label>
            <p>First Name<sup className='text-red-500'>*</sup></p>
            <input
            className='w-full bg-richblack-800 p-3 rounded-md my-2 border-b-[2px] border-solid border-richblack-700 '
             type="text"
             name="firstName"
             onChange={clickHandler}
             value={formData.firstName}
             placeholder='Enter First Name'
            ></input>
        </label>


        <label>
            <p>Last Name<sup className='text-red-500'>*</sup></p>
            <input
            className='w-full bg-richblack-800 p-3 rounded-md my-2 border-b-[2px] border-solid border-richblack-700 '
             type="text"
             name="lastName"
             onChange={clickHandler}
             value={formData.lastName}
             placeholder='Enter Last Name'
            ></input>
        </label>
        
       </div>

        <label>
            <p>Email Address <sup className='text-red-500'>*</sup></p>
            <input
             className='w-full bg-richblack-800 p-3 rounded-md my-2 border-b-[2px] border-solid border-richblack-700 '
             type="email"
             name="email"
             onChange={clickHandler}
             value={formData.name}
             placeholder='Enter Email Address'
            ></input>
        </label>
        <div className='flex gap-4 '>
        <label className='relative' >
            <p>Create Password<sup className='text-red-500'>*</sup></p>

            <input
            className='w-[250px] relative bg-richblack-800 p-3 rounded-md my-2 border-b-[2px] border-solid border-richblack-700 '
            required
             type={showPassword1?("text"):("password")}
             name="createpassword"
             onChange={clickHandler}
             value={formData.createpassword}
             placeholder='Enter Password'
            ></input>
            <span className='absolute bottom-[25px] right-2 text-xl text-richblack-100 cursor-pointer '
             onClick={()=>setShowPassowrd1((prev)=>!prev)}>
               {showPassword1?<AiOutlineEye></AiOutlineEye>:<AiOutlineEyeInvisible></AiOutlineEyeInvisible>}
            </span>
        </label>

        <label className='relative'>
            <p>Confirm Password<sup className='text-red-500'>*</sup></p>
            <input
            className='w-[250px] bg-richblack-800 p-3 rounded-md my-2 border-b-[2px] border-solid border-richblack-700 '
            required
             type={showPassword2?("text"):("password")}
             name="confirmpassword"
             onChange={clickHandler}
             value={formData.confrimpassword}
             placeholder='Confirm Password'
            ></input>
            <span className='absolute bottom-[25px] right-2 text-xl text-richblack-100 cursor-pointer '
             onClick={()=>setShowPassowrd2((prev)=>!prev)}>
               {showPassword2?<AiOutlineEye></AiOutlineEye>:<AiOutlineEyeInvisible></AiOutlineEyeInvisible>}
            </span>
        </label>

        
        </div>

        <button className='flex justify-center items-center w-full p-2 rounded-md text-black  my-4 bg-yellow-50'>
          Create Account
        </button>

    </form>
    </div>
  )
}

export default SignupForm