import React from 'react'
import { Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import moment from 'moment'
import 'moment/locale/es'  // without this line it didn't work
moment.locale('es')
import { motion } from 'framer-motion'

const Card = ({ snippet }) => {

    return (
        <Link to={`/details/${snippet?.slug}`} state={snippet}>
            {/* <motion.div whileHover={{ scale: 1.1 }} className='shadow-xl bg-gray-100 bg-opacity-30 backdrop-filter backdrop-blur-xl rounded-xl'>
                <div className='rounded-lg overflow-hidden w-80 h-52 relative'>
                    <img className='w-full h-full object-cover' src={snippet?.category.icon} alt="" />
                    <div className='absolute top-0 left-0 bg-gradient-to-t from-gray-900 w-full h-full'>
                        <motion.div initial={{ y: -20 }} animate={{ y: 0 }} className='absolute bottom-2 text-white px-2'>
                            <h1 className='text-xl hover:text-red-600'>{snippet?.title || <Skeleton />}</h1>
                            <div>{moment(snippet.created_at).fromNow()}</div>
                            </motion.div>
                            </div>
                </div>
            </motion.div> */}
            <div className='flex items-center gap-4 border-l-4 pl-2 py-2 border-red-600 bg-gray-50 bg-opacity-50 backdrop-filter backdrop-blur-sm shadow-xl mb-4 rounded-lg'>
                <div>
                    <img className='w-10 h-10 rounded-full' src={snippet?.category.icon} alt="" />
                </div>
                <div>
                    <h1 className='text-2xl'>{snippet?.title || <Skeleton />}</h1>
                    <div>{moment(snippet.created_at).fromNow() || <Skeleton />}</div>
                </div>
            </div>
        </Link>
    )
}

export default Card
