import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Parser } from 'html-to-react'
import moment from 'moment'
import { RiFileCopyLine } from 'react-icons/ri'
import { GiCheckMark } from 'react-icons/gi'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {BsStopwatch} from 'react-icons/bs'
import {BiUserCircle} from 'react-icons/bi'

const parser = new Parser()

const Details = () => {
  const { state } = useLocation()
  const [copy, setCopy] = useState(false)

  const code = parser.parse(state.content)

  const handleClick = () => {
    navigator.clipboard.writeText(state.code);
    setCopy(true)
  }

  return (
    <div className='grid grid-cols-4 p-8 gap-8 mt-8'>
      <div className='col-span-3'>
        <div className='mb-4'>
          <h1 className='text-3xl text-white font-bold mb-6'>{state.title}</h1>
          <div className='text-gray-400 flex gap-4 text-xl'>
            <span className='flex items-center gap-2'><BiUserCircle/>{state.dev.name}</span>
            <span className='flex items-center gap-2'><BsStopwatch/> {moment(state.created_at).format("MMM Do YY")}</span>
          </div>
          <hr />
        </div>
        <div className='text-gray-100 text-xl'>{code}</div>
        <div className=' overflow-hidden rounded-lg shadow-2xl bg-gray-600 mt-8'>
          <div className='flex items-center justify-between px-2 text-xl text-white'>
            <div className='flex items-center gap-2'>
              <img src={state.category.icon} className="w-6 h-6 rounded-full object-cover" alt="" />
              <span>{state.category.name}</span>
            </div>
            <button onClick={handleClick}>{!copy ? <RiFileCopyLine /> : <GiCheckMark />}</button>
          </div>
          <SyntaxHighlighter language={state.lang} style={atomOneDark} customStyle={{ padding: "20px" }} wrapLongLines={true}>
            {state.code}
          </SyntaxHighlighter>
        </div>
      </div>
      <aside className='col-span-1'>Sidebar</aside>
    </div>
  )
}

export default Details
