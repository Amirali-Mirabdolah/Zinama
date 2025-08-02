import React from 'react'
import { Link } from 'react-router-dom'

function ItemsList({ items }) {
    return (
        <div className='font-vazir-light tracking-tight flex flex-col gap-y-3 mt-3 *:pr-5 *:w-fit'>
            {
                items.map(item => (
                    <Link to={'/'}>
                        {item}
                    </Link>
                ))
            }
        </div>
    )
}

export default ItemsList