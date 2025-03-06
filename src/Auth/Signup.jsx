import React from 'react'

const Signup = () => {
  return (
     <div className='bg-blue-400 w-full min-h-screen flex items-center justify-center'>

      <div className='flex  flex-col items-center justify-center bg-white shadow-lg rounded-lg w-full max-w-sm p-6'>
        <form action="" className='flex  flex-col items-center justify-center w-full gap-4 '>
        <h2 className='text-2xl font-semibold'>signup</h2>
        
        <input 
        type="email"
         placeholder='email'
        className='p-3 focus-visible:outline-purple-300 rounded-lg w-full max-w-sm bg-gray-100'
          />

        <input 
        type="password" 
        placeholder='password' 
        className='p-3 focus-visible:outline-purple-300 rounded-lg w-full max-w-sm bg-gray-100'/>
        <button className='bg-purple-500 hover:bg-purple-600 text-white rounded-lg p-2 w-full max-w-xs'>signup</button>
        </form>
      </div>

    
    </div>
  )
}

export default Signup