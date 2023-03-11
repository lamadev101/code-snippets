import React from 'react'
import CheckOutsideClick from './CheckOutsideClick'

export const Main = ({setOpen}) => {
  const handleClose = ()=>setOpen(false);

  return (
    <section className='fixed w-full h-screen bg-[#1111116f] left-0 top-0 flex items-center justify-center'>
      <CheckOutsideClick onClickOutside={handleClose}>
      <div className=' w-[24rem] h-[20rem] bg-gray-500 px-4 py-2 rounded-md'>
        <form action="">
          <div className='flex flex-col gap-1'>
            <label htmlFor="" className='text-xl text-white font-bold'>Full Name</label>
            <input className='h-10 rounded-md outline-none pl-2 bg-transparent border border-white' type="text" />
          </div>
        </form>
      </div>
    </CheckOutsideClick>
    </section>
  )
}
