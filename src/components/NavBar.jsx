import React from 'react'
import NavPart2 from './NavPart2'

const NavBar = () => {
  return (
    <div>
      <nav className='bg-emerald-500 flex py-5 px-10items-center justify-between'>
  <h2 className='text-2xl'>shekhar</h2>
  <div className='flex gap-8 items-center' >
  <h4 className='text-xl'>About</h4>
  <h4 className='text-xl'>Contact</h4>
  <h4 className='text-xl'>Services</h4>
  <h4 className='text-xl'>Your account</h4>
    
  </div>
 
 </nav>
    </div>
  )
}

export default NavBar
