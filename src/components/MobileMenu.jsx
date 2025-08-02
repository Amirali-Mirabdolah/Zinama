import React, { useState } from 'react'
import { FaXmark } from "react-icons/fa6";
import { RiVipDiamondLine } from "react-icons/ri";
import { IoCallOutline } from "react-icons/io5";
import { GrArticle } from "react-icons/gr";
import { FiChevronDown } from "react-icons/fi";
import { BiCameraMovie } from "react-icons/bi";
import ItemsList from './ItemsList';

function MobileMenu({ visible, onClose }) {

    const [showList, setShowList] = useState(false)

    const showListHandler = () => {
        setShowList(prev => !prev)
    }

    return (
        <>
            <div className={`${visible ? 'right-0 opacity-100' : 'opacity-0 -right-64'} md:hidden transition-all ease-in-out duration-200 fixed top-0  w-64 min-h-screen bg-white dark:bg-dark z-50`}>
                <div className='p-4'>
                    <div className='flex justify-between items-center pb-5 mb-6 border-b border-light-border dark:border-dark-border'>
                        <div>
                            <span className='text-2xl font-bold text-main'>ZI</span>
                            <span className='text-2xl'>nama</span>
                        </div>
                        <FaXmark />
                    </div>
                    <div>
                        <div onClick={showListHandler} className='flex items-center justify-between'>
                            <div className='flex items-center justify-center gap-x-1'>
                                <BiCameraMovie />
                                <p>فیلم</p>
                            </div>
                            <FiChevronDown className={`${showList ? 'rotate-180' : ''} transition-all`}/>
                        </div>
                        {showList && <ItemsList items={['ماجراچویی', 'اکشن', 'کمدی']} />}
                    </div>
                    <div className='pt-8 mt-8 border-t border-light-border dark:border-dark-border space-y-4 *:flex *:items-center *:gap-x-2 *:w-fit'>
                        <a href='#'>
                            <RiVipDiamondLine className='text-main' />
                            <p>اشتراک</p>
                        </a>
                        <a href='#'>
                            <GrArticle />
                            <p>وبلاگ</p>
                        </a>
                        <a href='#'>
                            <IoCallOutline />
                            <p>تماس باما</p>
                        </a>
                    </div>
                </div>
            </div>

            <div onClick={onClose} className={`${visible ? '' : 'hidden'} overlay md:hidden fixed w-full h-full inset-0 bg-black/40 z-40`}></div>
        </>

    )
}

export default MobileMenu