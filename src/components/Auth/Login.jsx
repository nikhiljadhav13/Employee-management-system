import React, { useState } from 'react'

const Login = ({handlLogin}) => {

  

    const [email , setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e)=>{
      handlLogin(email,password)
        e.preventDefault()

        setEmail('')
        setPassword('')
    }
  return (
    <div className='h-screen w-screen flex items-center justify-center'>
      <div className='p-20 border-2 border-emerald-600 rounded-xl'>
        <form onSubmit={(e)=>{
            submitHandler(e)
        }} className='flex flex-col justify-center items-center '>
            <input 
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
             required className=' text-white rounded-full bg-transparent  outline-none border-2 border-emerald-600 py-2 px-5 ' type="email" placeholder='Enter your e-mail' />
            <input
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }} 
            required className='text-white rounded-full bg-transparent outline-none border-2 border-emerald-600 py-2 px-5 mt-3' type="password" placeholder='Enter password'/>
            <button className='rounded-full  text-white outline-none bg-emerald-600 py-2 px-23 mt-5 font-bold hover:bg-emerald-700 active:scale-95'>Log in</button>
        </form>

      </div>
    </div>
  )
}

export default Login
