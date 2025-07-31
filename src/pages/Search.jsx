import React, { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { IoFilter } from "react-icons/io5";
import { FiChevronDown } from "react-icons/fi";

function Search() {

  const [showFilters, setShowFilters] = useState(false)

  const filterHandler = () => {
    setShowFilters(prev => !prev)
  }

  return (
    <div className='flex text-white justify-center items-center'>
      <div className='w-[80%] h-[700px] bg-zinc-700 mt-20 mb-8'>
        <div className='w-[80%] mx-auto relative'>
          <div className='flex items-center gap-x-2'>
            <div className='flex justify-between w-full h-[55px] relative border-2 border-dark-icons rounded-xl px-3 py-1 my-5'>
              <IoSearchOutline className='h-full dark:text-dark-icons text-[35px]' />
              <input dir='auto' maxLength={18} type="text" className='block w-[95%] h-full outline-0' />
            </div>
            <button onClick={filterHandler} className='border-2 border-dark-icons p-2 h-full rounded-xl cursor-pointer text-white hover:text-main transition-colors'>
              <IoFilter className='text-[35px]' />
            </button>
          </div>
          <ul className={`absolute top-full left-0 right-0 transition-all duration-300 ease-in-out origin-top ${showFilters ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'} flex justify-around gap-x-3 *:!rounded-md [&_li]:space-x-`}>
            <li className='filter-button'>
              <span>نوع</span>
              <FiChevronDown />
            </li>
            <li className='filter-button'>
              <span>ژانر</span>
              <FiChevronDown />
            </li>
            <li className='filter-button'>
              <span>کشور</span>
              <FiChevronDown />
            </li>
            <li className='filter-button'>
              <span>رده سنی</span>
              <FiChevronDown />
            </li>
            <li className='filter-button'>
              <span>دوبله فارسی</span>
            </li>
            <li className='filter-button'>
              <span>زیرنویس فارسی</span>
            </li>
            <li className='filter-button'>
              <span>سال</span>
              <FiChevronDown />
            </li>
            <li className='filter-button'>
              <span>امتیاز</span>
              <FiChevronDown />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Search