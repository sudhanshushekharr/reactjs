import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    

  return (
  <div className='py-7 px-10 bg-emerald-600 text-white flex items-center justify-between'>
  <h2 className='text-2xl'>Shreyans</h2>
  <div className='flex gap-10'>
   <Link to='/'>Home</Link>
   <Link to='/product'>Product</Link>
   <Link to='/contacts'>Contacts</Link>
   <Link to='/about'>About</Link>
  </div>

  
  </div>
  
  )
}

export default Header
