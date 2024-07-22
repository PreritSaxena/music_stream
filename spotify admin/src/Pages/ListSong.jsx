import React, { useEffect, useState } from 'react'
import { url } from '../App'
import { toast } from 'react-toastify'
import axios from 'axios'

const ListSong = () => {

    const [data , setData] = useState([])

    const fetchSong = async()=> {
        try{
            const response = await axios.get(`${url}/api/song/list`)
            // console.log(response.data)
            if(response.data.success){
                setData(response.data.songs)
            }
        }
        catch{
            toast.error('Failed to fetch Song')
        }
    }

    const removeSong =  async(id) => {
        try{
            const response = await axios.post(`${url}/api/song/remove` , {id})
            if(response.data.success){
                toast.success(response.data.message)
                await fetchSong()
            }
        }
        catch(err){
            toast.error('Failed to remove Song')
        }
    }

        useEffect(() => {
        fetchSong();
    },[])

  return (
    <div>
      <p>All Songs</p>
      <br />
      <div className='sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr]
       items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100'>
        <b>Image</b>
        <b>Name</b>
        <b>Album</b>
        <b>Duration</b>
        <b>Action</b>
       </div>

       {data.map((item,index)=>{
        return(
            <div key={index} className='grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] 
            items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5'>
                <img src={item.image} className='w-12' alt="" />    
                <p>{item.name}</p>
                <p>{item.album}</p>  
                <p>{item.duration}</p>
                <p className='cursor-pointer' onClick={()=> removeSong(item._id)}>x</p>
            </div>
        )
       })}
    </div>
  )
}

export default ListSong
