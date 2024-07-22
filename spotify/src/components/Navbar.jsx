import React from 'react'
import { assets } from '../assets/frontend-assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate()

  return (
    <>
      <div className='w-full flex justify-between items-center font-semibold'>
        <div className='flex items-center gap-2'>
        <img onClick={()=>navigate(-1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer ' src={assets.arrow_left} alt="" />
        <img onClick={()=>navigate(1)}  className='w-8 bg-black p-2 rounded-2xl cursor-pointer ' src={assets.arrow_right} alt="" />
        </div> 

        <div className='flex items-center gap-4'> 
            <button className='bg-white text-black rounded-full px-4 py-1 text-[15px] hidden md:block'>Explore Premium</button>
            <button className='bg-black rounded-full py-1 px-3'>Install App</button>
            <button className='bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center'>A</button>
        </div>
      </div>

      <div className='flex gap-2 mt-4'>
        <p className='px-4 py-1 bg-white text-black rounded-full cursor-pointer'>All</p>
        <p className='px-4 py-1 bg-black rounded-full cursor-pointer'>Music</p>
        <p className='px-4 py-1  bg-black rounded-full cursor-pointer '>Podcasts</p>
      </div>
    </>
  )
}   

export default Navbar
