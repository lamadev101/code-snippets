import React from 'react'
import { Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import moment from 'moment'
import 'moment/locale/es'  // without this line it didn't work
moment.locale('es')


const Card = ({ snippet }) => {

    return (
        <Link to={`/details/${snippet?.slug}`} state={snippet}>
            <div className='shadow-xl bg-gray-700 rounded-xl'>
                <div className='rounded-lg overflow-hidden w-80 h-52 relative'>
                    <img className='w-full h-full object-cover' src={snippet?.category.icon} alt="" />
                    <div className='absolute top-0 left-0 bg-gradient-to-t from-gray-900 w-full h-full'>
                        <div className='absolute bottom-0 text-white px-2'>
                            <h1 className='text-xl hover:text-red-600'>{snippet?.title || <Skeleton />}</h1>
                            <div>{moment(snippet.created_at).fromNow()}</div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card