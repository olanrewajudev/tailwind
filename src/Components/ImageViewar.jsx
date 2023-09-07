import React from 'react'
import {FaTimes} from 'react-icons/fa'

const ImageViewar = ({closeView, img}) => {
  return (
    <div className='bg-black/60 fixed top-0 left-0 h-screen w-full flex items-center justify-center z-10'>
      <div className=" relative">
        <div onClick={closeView} className="bg-white/70 text-red-600 text-3xl rounded-full w-fit p-2 absolute top-10 right-10 cursor-pointer"><FaTimes /> </div>
        <img src={img} alt="" className='lg:w-[75%] z-10 h-auto' />
      </div>
    </div>
  )
}

export default ImageViewar
