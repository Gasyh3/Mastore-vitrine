import React from 'react'
import { LoginForm } from '@/components/LoginForm';

const Login = () => {
  
  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
      <h1>Login</h1>
      <LoginForm />
    </div>
  )
}

export default Login