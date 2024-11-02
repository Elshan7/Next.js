import Link from 'next/link'
import React from 'react'

const Box = ({props}) => {
  return (
    <div className='w-[300px] rounded-md bg-slate-400 '>
        <div className="img  ">
            
            <img className='h-[300px] object-contain w-full my-1  bg-slate-400 ' src={props.image} alt="" />
        </div>
        <div className="h-[200px] flex flex-col p-3 bg-gray-400 text-lime-50">
            <h5 className='h-[30px] overflow-hidden'>
                {props.title}
            </h5>
            <span className='my-3'>
            {props.price}
            </span>
            <button className='w-6/12 bg-green-700 text-lime-50 p-2 rounded-sm hover:bg-blue-600'>
                <Link href={`/pages/product/${props.id}`}>
                detail page
                </Link>
            </button>
        </div>
      
    </div>
  )
}

export default Box
