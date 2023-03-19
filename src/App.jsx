import React, { useState } from 'react'
import Category from './pages/category'
import Details from './pages/details'
import Home from './pages/home'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import { Main } from './components/model/Main'


const App = () => {
  const Layout = ({ children }) => {
    const [open, setOpen] = useState(false)

    return (
      <main className='grid grid-cols-6'>
        <aside className='sticky top-0 col-span-1 bg-gray-800 bg-opacity-90 backdrop-filter backdrop-blur-lg shadow-2xl h-screen'>
          <Sidebar />
        </aside>
        <section className='col-span-5 relative bg-gradient-to-tr bg-[#010c19df]'>
          <div className='fixed z-20 top-2 right-2 backdrop-blur-50'>
            <span className='text-xl font-thin mr-2 text-white'>Want to become member?</span>
            <button onClick={()=>setOpen(true)} className='text-white bg-green-600 rounded-2xl px-4 py-2'>JOIN NOW</button>
          </div>
          <Outlet />
        </section>
        {open && <Main setOpen={setOpen} />}
      </main>
    )
  }
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/details/:slug", element: <Details /> },
        { path: "/category/:slug", element: <Category /> }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App