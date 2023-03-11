import React from 'react'
import { NavLink } from 'react-router-dom'
import { fetchData } from '../utils/endPoints'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Sidebar = () => {
  const {data}= fetchData('navitems', 'category/')
  const navItems = data?.data;

  return (
    <div className='text-white'>
      <div>
        <div className='text-center text-2xl my-4'>.snippets</div>
        <hr />
        <div className='flex items-left uppercase font-bold gap-2 flex-col mt-6 px-8'>
          <NavLink to="/">
            <div className='flex items-center gap-2'><img src="/home.png" className='h-8 w-8 rounded-full object-cover' alt="" /><span>Home</span></div>
          </NavLink>
          {navItems?.map(item=>(
            <NavLink  key={item.id} to={`/category/${item.name}`} state={item.image} >
              <div className='flex items-center gap-2'><img src={item.icon} className="w-8 h-8 object-cover rounded-full" alt="" />{item.name || <Skeleton/>}</div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar