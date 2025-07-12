import React, { useEffect, useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { IoSunnyOutline } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa";
import { PiSignInLight } from "react-icons/pi";
import { FiChevronDown } from "react-icons/fi";
import { LuUserRound } from "react-icons/lu";
import { HiMiniBars3 } from "react-icons/hi2";

function Navbar() {

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  useEffect(() => {
    const root = window.document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const themeHandler = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <>
      <header className='sticky top-0 z-50 shadow-sm rounded-b-sm mx-auto bg-white dark:bg-dark dark:text-white'>
        <nav className='flex justify-between items-center py-2 px-3 w-full'>

          <div className='flex w-full *:flex-1/3 justify-between sm:justify-between h-9 gap-x-12 items-center'>
            <div className='sm:!hidden'>
              <button className='button'>
                <HiMiniBars3 className='icon' />
              </button>
            </div>

            <a href="#">
              <h2 className='text-2xl text-center sm:text-right sm:text-3xl font-bold'>Zinama</h2>
            </a>

            <ul className='hidden md:flex lg:max-w-[238px] *:flex-1/3 *:text-center justify-between items-center h-full gap-x-8 [&_li>a]:h-9 [&_li>div>a]:w-fit [&_a]:flex [&_a]:items-center *:transition-all'>
              <li className=''>
                <a href="#">
                  خانه
                </a>
              </li>
              <li className='relative group'>
                <a href="#">
                  فیلم
                  <FiChevronDown className='text-sm' />
                </a>
                <div className='navbar-submenu'>
                  <a href="#">اکشن</a>
                  <a href="#">کمدی</a>
                  <a href="#">جنگی</a>
                  <a href="#">خانوادگی</a>
                  <a href="#">درام</a>
                  <a href="#">ترسناک</a>
                  <a href="#">تاریخی</a>
                  <a href="#">تخیلی</a>
                  <a href="#">مستند</a>
                </div>
              </li>
              <li className='relative group'>
                <a href="#">
                  سریال
                  <FiChevronDown className='text-sm' />
                </a>
                <div className='navbar-submenu'>
                  <a href="#">کمدی</a>
                  <a href="#">معمایی</a>
                  <a href="#">اکشن</a>
                  <a href="#">تاریخی</a>
                  <a href="#">تخیلی</a>
                </div>
              </li>
            </ul>

            <div className='flex items-center justify-end gap-x-1 sm:gap-x-2 md:gap-x-3'>
              <button className='button'>
                <IoIosSearch className='icon' />
              </button>
              <button onClick={themeHandler} className='button'>
                <IoSunnyOutline className='icon' />
              </button>
              <button className='opacity-0 invisible hidden'>
                <FaRegMoon className='icon' />
              </button>
              <a href="#" className='hidden md:flex items-center gap-x-1 bg-main text-white h-9 px-1.5 rounded-sm hover:text-dark transition-colors'>
                <PiSignInLight className='text-base'/>
                ورود | ثبت نام
              </a>
              <button className='button md:!hidden bg-main dark:!bg-main text-white hover:!text-dark '>
                <LuUserRound className='icon'/>
              </button>
            </div>

          </div>


        </nav>
      </header>
    </>
  )
}

export default Navbar