import React, { useState } from 'react'
import axios from 'axios'

const AddAdmin = () => {
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setMessage('')
        try {
            const response = await axios.post('http://localhost:3001/adminHome',{name, username, password})
            setMessage(response.data.message)
        }catch (error){
            setMessage(error.response.data.message)
        }
        setName('')
        setUsername('')
        setPassword('')
    }

    
  return (
    <div className=''>
        <div className='flex flex-col gap-6 border border-black w-1/3 p-10 text-center rounded'>
            <div>
                Add Admin
            </div>
            {message && <p className='text-red-500'>{message}</p>}
            <form onSubmit={handleSubmit}
                className='flex flex-col gap-8'>
                <input type="text"
                    name='name'
                    value={name}
                    placeholder='Enter name'
                    className='border border-black p-1'
                    onChange={e => setName(e.target.value)}
                    required
                />
                <input type="email"
                    name='username'
                    value={username}
                    placeholder='Enter email'
                    className='border border-black p-1'
                    onChange={e => setUsername(e.target.value)}
                />
                <input type="password"
                    name='password'
                    value={password}
                    placeholder='Enter password'
                    className='border border-black p-1'
                    onChange={e => setPassword(e.target.value)}
                />
                <div>
                    <button className='border border-black h-8 px-5 rounded' type="submit">
                        Add Admin
                    </button>
                </div>
            </form>
        </div>
        
    </div>
  )
}

export default AddAdmin