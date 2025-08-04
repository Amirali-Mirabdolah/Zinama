import React, { useState } from 'react'
import { FiChevronDown } from "react-icons/fi";
import { BiCameraMovie } from "react-icons/bi";

import { Link } from 'react-router-dom'
import WithShowSubMenu from './HOCs/WithShowSubMenu';

function ItemsList({ title, items, icon, showSubMenu, showSubMenuHandler }) {

    return (
        <>
            <div onClick={showSubMenuHandler} className='flex items-center justify-between'>
                <div className={`${showSubMenu ? 'text-main' : ''} flex items-center justify-center gap-x-2`}>
                    {icon}
                    <p>{title}</p>
                </div>
                <FiChevronDown className={`${showSubMenu ? 'rotate-180 text-main' : ''} transition-all`} />
            </div>
            {showSubMenu &&
                <div className='font-vazir-light text-sm tracking-tight flex flex-col gap-y-2 mt-3 *:pr-6 *:w-fit'>
                    {
                        items.map(item => (
                            <Link to={'/'}>
                                {item}
                            </Link>
                        ))
                    }
                </div>
            }
        </>
    )
}

export default WithShowSubMenu(ItemsList)