import React from 'react'
import { NavLink } from 'react-router-dom'
import { fetchData } from '../utils/endPoints'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import {motion} from 'framer-motion'

const Sidebar = () => {
  const {data}= fetchData('navitems', 'category/')
  const navItems = data?.data;

  return (
    <div className='text-white'>
      <div>
        <motion.div initial={{x:200}} animate={{x:0}} transition={{delay:2, type:'spring', stiffness:6}} className='text-center text-2xl my-4'>.snippets</motion.div>
        <hr />
        <div className='flex items-left uppercase font-bold gap-2 flex-col mt-6 px-8'>
          <NavLink to="/">
            <div className='flex items-center gap-2'><img src="/home.png" className='h-8 w-8 rounded-full object-cover' alt="" /><span>Home</span></div>
          </NavLink>
          {navItems?.map(item=>(
            <NavLink  key={item.id} to={`/category/${item.name}`} state={item.image} >
              <motion.div initial={{x:200}} animate={{x:0}} transition={{delay:1.5, duration:1, type: 'spring', stiffness:120}} className='flex items-center gap-2'><img src={item.icon} className="w-8 h-8 object-cover rounded-full" alt="" />{item.name || <Skeleton/>}</motion.div>
            </NavLink>
          )) || <Skeleton/>}
        </div>
      </div>
    </div>
  )
}

export default Sidebar