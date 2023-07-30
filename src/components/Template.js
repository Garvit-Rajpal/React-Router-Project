import React from 'react'
import LoginForm from './LoginForm'
import signupForm from './singupForm'
const Template = ({title,desc1,desc2,image,formtype,setIsLoggedIn}) => {
  return (
    <div>
        <div>
            <h1>{title}</h1>
        </div>
        <div>
            <p>{desc1}</p>
            <p>{desc2}</p>
        </div>
        
        <div>
            {
                formtype==="signup"?<signupForm></signupForm>:<LoginForm></LoginForm>
            }
        </div>
        
    </div>
  )
}

export default Template