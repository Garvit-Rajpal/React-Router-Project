import React from 'react'
import LoginForm from './LoginForm'
import SignupForm from './singupForm'
import {FcGoogle} from 'react-icons/fc'
import frameImage from '../assets/frame.png'

const Template = ({title,desc1,desc2,image,formtype,setIsLoggedIn}) => {
  return (
    <div className='flex justify-between mx-auto my-[40px] gap-x-[100px] w-11/12 max-w-[1160px]'>
        <div className='flex flex-col gap-6 flex-wrap max-w-[500px]'>
          <div>
            <h1 className='font-bold text-3xl tracking-wide'>{title}</h1>
          </div>
          <div>
            <p className='text-richblack-100 text-lg'>{desc1}</p>
            <p className='text-blue-100 italic'>{desc2}</p>
          </div>
        
          <div>
            {
                formtype==="signup"?<SignupForm setIsLoggedIn={setIsLoggedIn}></SignupForm>:<LoginForm setIsLoggedIn={setIsLoggedIn}></LoginForm>
            }
          </div>
          <div className='flex justify-center items-center gap-2'>
            <div className='w-[200px] h-[2px] bg-richblack-100'></div>
            
            <span className='text-richblack-100'>OR</span>
            <div className='w-[200px] h-[2px]  bg-richblack-100 '></div>
          </div>

          <button className='flex items-center bg-richblack-800 p-2 justify-center rounded-md text-richblack-100 gap-3 text-lg border-solid border-[1px] border-richblack-700'>
            <FcGoogle></FcGoogle>
            Signup with Google
          </button>
        </div>

        <div className='relative'>
            <img src={frameImage}
                className='absolute top-2 left-2  '
                alt="Pattern"
                width={558}
                height={504}
                loading="lazy"/>

            <img src={image}
                alt="Students"
                className='relative'
                width={558}
                height={490}
                loading="lazy"/>    
        </div>
        
    </div>
  )
}

export default Template