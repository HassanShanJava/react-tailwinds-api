import React, { useEffect } from 'react'
import useAxios from '../hooks/useAxios'


// need to get dat from api
const ButtonFilters = ({fetchData:fetchApi}) => {

    // destructor response so we can render it
    const {fetchData, response:{categories} ,loading}=useAxios("categories")

    useEffect(()=>{
      fetchData();
    },[fetchData]);

    const clickButton=e=>{
      fetchApi({params:{category:e.target.value}})
    }

    // loading skeleton
    if(loading){
      return (
        <div className='animate-pulse my-5 inline-block text-center'>
          {[...Array(35).keys()].map(num=>(
            <div key={num} className='h-7 w-20  bg-gray-300 m-1 rounded-sm inline-block' ></div>
          ))}
        </div>
      )
    }

    return (
    <div className='text-center my-5 '>
        {categories &&  categories.map(button=>(
            <button
                key={button}
                onClick={clickButton}
                className='bg-pink-400 text-white m-1 py-1 px-2 rounded-sm hover:bg-pink-500'
                value={button}
            >{button}</button>
        ))}
    </div>
  )
}

export default ButtonFilters