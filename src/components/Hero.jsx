import React from 'react'

const Hero = ({banner}) => {
  return (
    <div className='w-full'>
      <img className='object-cover h-96 w-full rounded-br-[6rem]' src={banner} onError={(e)=>{e.target.onerror===null; e.target.src="https://wallpapercave.com/uwp/uwp3417410.jpeg" }} alt="" />
    </div>
  )
}

export default Hero