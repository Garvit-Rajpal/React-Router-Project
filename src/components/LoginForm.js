import React from 'react'
import { useState } from 'react';

const LoginForm = () => {
    const [formData,setFormData]=useState[{
        email:"",password:""
    }]
    const [showPassword,setShowPassowrd]=useState(false);
    
    function clickHandler(event){

        setFormData((prev)=>(
            {
                ...prev,
                [event.target.name]:event.target.value
            }
        ))

    }

  return (
    <form>
        <label>
            <p>Email Address <sup>*</sup></p>
            <input
             type="email"
             name="email"
             onChange={clickHandler}
             value={formData.name}
            ></input>
        </label>

        <label>
            <p>Password <sup>*</sup></p>
            <input
             type={showPassword?"text":"password"}
             name="password"
             onChange={clickHandler}
             value={formData.password}
            ></input>
        </label>
    </form>
  )
}

export default LoginForm