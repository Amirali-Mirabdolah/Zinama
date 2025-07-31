import React from 'react'

function MobileMenu({ visible, onClose }) {



    return (
        <>
            <div className={`${visible ? 'right-0 opacity-100' : 'opacity-0 -right-64'} md:hidden transition-all ease-in-out duration-200 fixed top-0  w-64 min-h-screen bg-white dark:bg-dark z-50`}>

            </div>

            <div onClick={onClose} className={`${visible ? '' : 'hidden'} overlay md:hidden fixed w-full h-full inset-0 bg-black/40 z-40`}></div>
        </>

    )
}

export default MobileMenu