import React from 'react'
import { SiImdb } from "react-icons/si";
import { FaPlayCircle } from "react-icons/fa";

function MediaCard({ img }) {
    console.log(img)
    return (
        <div className='w-[29] md:w-48'>
            <div className='relative h-44 md:h-72 w-full bg-center bg-cover rounded-tl-xl rounded-tr-xl' style={{ backgroundImage: `url(/images/${img}.jpg)` }}>
                <div className='opacity-0 hover:opacity-100 transition-all absolute inset-0 justify-between text-white media-card-hover'>
                    <div className='w-full h-full flex items-center justify-center'>
                        <FaPlayCircle className='size-12 hover:text-main transition-colors cursor-pointer' />
                    </div>
                    <div className='absolute bottom-0 p-2'>
                        <h3>مقصد نهایی</h3>
                        <div className='flex gap-x-2 items-center mb-1'>
                            <SiImdb className='text-amber-300 size-6' />
                            <span>6.6</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='*:line-clamp-1 text-[10px] md:*:text-sm [&>*:first-child]:mt-2 dark:text-white text-center space-y-2'>
                <h3>مقصد نهایی: رگ و ریشه</h3>
                <h3 className='[direction:ltr]'>Final Destination: vessle and blodding</h3>
            </div>
        </div>
    )
}

export default MediaCard