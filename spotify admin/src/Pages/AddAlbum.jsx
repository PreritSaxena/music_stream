import React, { useState } from 'react'
import { assets } from '../assets/admin-assets/assets'
import Loader from '../components/Loader';
import { url } from '../App';
import { toast } from 'react-toastify';
import axios from 'axios';

const AddAlbum = () => {

  const [image , setImage] = useState(false);
  const [color , setColor] = useState('#ffffff');
  const [name , setName] = useState('');  
  const [desc , setDesc] = useState('');
  const [loading , setLoading] = useState(false);

  const onSubmitHandler = async(e) => {
    e.preventDefault()
    setLoading(true)
    try{
      const  formData = new FormData()
      formData.append('name' , name)
      formData.append('desc' , desc)
      formData.append('image' , image)
      formData.append('bgColor' , color)

      const response = await axios.post(`${url}/api/album/add` , formData);
      if(response.data.success){
        toast.success('Album Added Successfully')
        setName('')
        setDesc('')
        setImage(false)
        setColor('#ffffff')
        
      }
      else{
        toast.error('Failed to add Album')
      }
    }
    catch(err){
        toast.error('Error occur')
    }
    setLoading(false)
  }

  return  loading ? (
    <Loader/>
  ) : 
  (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-start gap-8 text-gray-600'>
      <div className='flex flex-col gap-4'>
        <p>Upload Image</p>
        <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' accept='image/*' hidden/>
        <label htmlFor="image">
          <img className='w-24 cursor-pointer' src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
        </label>
      </div>

      <div className='flex flex-col gap-2.5'>
        <p>Album Name</p>
        <input onChange={(e)=> setName(e.target.value)} value={name} type="text" placeholder='Type Here' className='bg-transparent outline-green-600 
        border-2 border-gray-400 p-2.5 w-[max(40vw,250px)] ' name="" id="" />
      </div>

      <div className='flex flex-col gap-2.5'>
        <p>Album Description</p>
        <input onChange={(e)=> setDesc(e.target.value)} value={desc} type="text" placeholder='Type Here' className='bg-transparent outline-green-600 
        border-2 border-gray-400 p-2.5 w-[max(40vw,250px)] ' name="" id="" />
      </div>

      <div className='flex flex-col gap-3'>
        <p>Background Color </p>
        <input onChange={(e)=>setColor(e.target.value)} value={color} type="color" />
        <button type='submit' className='flex-base rounded-md bg-black text-white py-2.5 px-14 cursor-pointer' >Add</button>
      </div>
    </form>
  )
}

export default AddAlbum
