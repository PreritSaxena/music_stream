import React from 'react'
import {assets} from '../assets/frontend-assets/assets'
import { useNavigate } from 'react-router-dom'


const Sidebar = () => {

  const navigate = useNavigate()

  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
        <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
            <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                <img src={assets.home_icon} className='w-6' />
                <p  onClick={()=>navigate('/')} className='font-bold'>Home</p>
            </div>

            <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                <img src={assets.search_icon} className='w-6' />
                <p className='font-bold'>Search</p>
            </div>
        </div>

        <div className='bg-[#121212] h-[85%] rounded  '>
          <div className='p-4 flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              <img src={assets.stack_icon} alt="" className='w-6' />
              <p>Your Library</p>
            </div>
            <div className='flex gap-3 items-center'>
              <img src={assets.arrow_icon} alt="" className='w-6' />
              <img src={assets.plus_icon} alt="" className='w-6' />
            </div>
          </div>
          <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col gap-1 items-start justify-start pl-4'>
            <h1>Create your first Playlist</h1>
            <p className='font-light'>it's easy we will help you</p>
            <button className='px-4 py-1.5 bg-white text-[15px] rounded-full text-black mt-4'>Create Playlist</button>
          </div>

          <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col gap-1 items-start justify-start pl-4 mt-4'>
            <h1>Let's find some podcasts to follow</h1>
            <p className='font-light'>We will keep you update on new episodes</p>
            <button className='px-4 py-1.5 bg-white text-[15px] rounded-full text-black mt-4'>Browse Podcast</button>
          </div>
        </div>
      
    </div>
  )
}

export default Sidebar
