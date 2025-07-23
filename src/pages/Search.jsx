import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { IoFilter } from "react-icons/io5";

function Search() {
  return (
    <div className='flex text-white justify-center items-center min-h-screen my-16'>
      <div className='w-[80%] h-[700px] bg-zinc-700'>
        <div className='w-[80%] mx-auto flex items-center gap-x-2'>
          <div className='flex justify-between w-full h-[55px] relative border-2 border-dark-icons rounded-xl px-3 py-1 my-5'>
            <IoSearchOutline className='h-full dark:text-dark-icons text-[35px]' />
            <input maxLength={18} type="text" className='block w-[95%] h-full outline-0' />
          </div>
          <button className='border-2 border-dark-icons p-2 h-full rounded-xl cursor-pointer text-white hover:text-main transition-colors'>
            <IoFilter className='text-[35px]' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Search