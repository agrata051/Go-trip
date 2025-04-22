import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Register = () => {
  const [acceptedTerms, setAcceptedTerms] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add register logic here
  }

  return (
    <div className='min-h-screen pt-20 pb-10 flex items-center justify-center bg-gray-50'>
      <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-md'>
        <h2 className='text-3xl font-semibold text-center mb-8 text-[#051036]'>Create Account</h2>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <label htmlFor='firstName' className='block text-sm font-medium text-gray-700 mb-1'>First Name</label>
              <input
                type='text'
                id='firstName'
                required
                className='w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                placeholder='First name'
              />
            </div>
            <div>
              <label htmlFor='lastName' className='block text-sm font-medium text-gray-700 mb-1'>Last Name</label>
              <input
                type='text'
                id='lastName'
                required
                className='w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                placeholder='Last name'
              />
            </div>
          </div>
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
              placeholder='Create password'
            />
          </div>
          <div>
            <label htmlFor='confirmPassword' className='block text-sm font-medium text-gray-700 mb-1'>Confirm Password</label>
            <input
              type='password'
              id='confirmPassword'
              required
              className='w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Confirm password'
            />
          </div>
          <div className='flex items-center'>
            <input
              type='checkbox'
              id='terms'
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
              className='h-4 w-4 text-blue-600 rounded border-gray-300'
              required
            />
            <label htmlFor='terms' className='ml-2 block text-sm text-gray-700'>
              I agree to the{' '}
              <a href='#' className='text-blue-600 hover:underline'>Terms and Conditions</a>
            </label>
          </div>
          <button
            type='submit'
            className='w-full bg-[#051036] text-white py-3 rounded-md hover:bg-[#051036]/90 transition-colors'
          >
            Create Account
          </button>
        </form>
        <p className='mt-6 text-center text-sm text-gray-600'>
          Already have an account?{' '}
          <NavLink to='/login' className='text-blue-600 hover:underline'>
            Login
          </NavLink>
        </p>
      </div>
    </div>
  )
}

export default Register