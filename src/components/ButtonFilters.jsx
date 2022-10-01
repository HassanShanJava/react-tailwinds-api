import React, { useEffect } from 'react'
import useAxios from '../hooks/useAxios'


// need to get dat from api
const ButtonFilters = () => {

    // destructor response so we can render it
    const {fetchData, response:{categories} ,loading}=useAxios("categories")

    useEffect(()=>{
      fetchData();
    },[]);

    return (
    <div className='text-center my-5 '>
        {categories &&  categories.map(button=>(
            <button
                className='bg-pink-400 text-white m-1 py-1 px-2 rounded-sm hover:bg-pink-500'
            >{button}</button>
        ))}
    </div>
  )
}

export default ButtonFilters