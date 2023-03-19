import React from 'react'
import Card from './Card'

const List = ({ snippets, title }) => {

  return (
    <div className='p-8 grid grid-cols-6 gap-4'>
      <div className=' col-span-4'>
        <div className='mb-4'>
          <h1 className='text-white text-2xl mb-2'>{title}</h1>
          <div className='w-24 h-[2px] bg-red-500' />
        </div>
        <div>
          {snippets?.map((snippet, index) => (
            <Card key={index} snippet={snippet} />
          ))}
        </div>
      </div>
      <div className='col-span-2'>
      </div>
    </div>
  )
}

export default List