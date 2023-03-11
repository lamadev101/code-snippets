import React from 'react'
import Card from './Card'

const List = ({snippets, title}) => {

  return (
    <div className='p-8'>
      <div className='mb-4'>
      <h1 className='text-white text-2xl mb-2'>{title}</h1>
      <div className='w-24 h-[2px] bg-red-500' />
      </div>
      <div className='grid grid-cols-3 gap-6 '>
      {snippets?.map((snippet, index) => (
        <Card key={index} snippet={snippet} />
      ))}
      </div>
    </div>
  )
}

export default List