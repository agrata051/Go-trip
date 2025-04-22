import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Add login logic here
  }

  return (
    <div className='min-h-screen pt-20 pb-10 flex items-center justify-center bg-blue-100'>
      <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-md'>
        <h2 className='text-3xl font-semibold text-center mb-8 text-[#051036]'>Welcome Back!</h2>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-1'>Email</label>
            <input
              type='email'
              id='email'
              required
              className='w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Enter your email'
            />
          </div>
          <div>
            <label htmlFor='password' className='block text-sm font-medium text-gray-700 mb-1'>Password</label>
            <input
              type='password'
              id='password'
              required
              className='w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Enter your password'
            />
          </div>
          <div className='flex items-center justify-between'>
            <button type='button' className='text-sm text-blue-600 hover:underline'>
              Forgot Password?
            </button>
          </div>
          <button
            type='submit'
            className='w-full bg-[#051036] text-white py-3 rounded-md hover:bg-[#051036]/90 transition-colors'
          >
            Login
          </button>
        </form>
        <p className='mt-6 text-center text-sm text-gray-600'>
          Don't have an account?{' '}
          <NavLink to='/register' className='text-blue-600 hover:underline'>
            Register
          </NavLink>
        </p>
      </div>
    </div>
  )
}

export default Login