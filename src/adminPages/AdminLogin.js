import React, { useState } from 'react'
import view from '../assets/view.png'
import hide from '../assets/hide.png'

const AdminLogin = ({ onLogin }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        if(username === 'hanumant' && password === '1234'){
            onLogin(true)
        }else{
            setError('Invalid credentials')
        }
    }

    const handleShowPassword = () =>{
        setShowPassword(prevState => !prevState)
    }
  return (
    <div className='flex items-center justify-center h-screen'>
        <div className='flex flex-col gap-6 border border-black w-1/4 p-10 text-center rounded'>
            <div className=''>
                Admin Login
            </div>
            {error && <p className='text-red-500'>{error}</p>}
            <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
                <input 
                    type='text'
                    value={username}
                    placeholder='Enter your email'
                    className='border border-black h-8 p-1 rounded w-full'
                    onChange={(e) => setUsername(e.target.value)}
                />
                <div className='relative'>
                    <input 
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        placeholder='Enter your password'
                        className='border border-black h-8 p-1 rounded w-full'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className='absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer' onClick={handleShowPassword}>
                        {showPassword ? 
                            <img src={view} alt="" className='w-5'/> 
                            : <img src={hide} alt="" className='w-5'/>}

                    </div>
                </div>
                

                <div>
                    <button className='border border-black h-8 px-5 rounded' type="submit">
                        Log in
                    </button>
                </div>
            </form>

        </div>
    </div>
  )
}

export default AdminLogin