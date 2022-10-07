import React from 'react'

import search_icon from "../../assets/icons/search_icon.svg"
import filter_icon from "../../assets/icons/filter_icon.svg"

function TopAppBarComponent() {
  return (
    <div className='w-full h-[152px] flex flex-col justify-between'>

      <div className='mx-6 mt-4'>
        <h1 className='font-bold text-2xl'>Поиск</h1>
      </div>

      <div className='mx-4 relative'>
        <div className='flex absolute inset-y-0 items-center pl-3'>
          <img src={search_icon} alt="search_icon" />
        </div>
        <div className='flex absolute inset-y-0 right-0 items-center pr-3'>
          <img src={filter_icon} alt="search_icon" />
        </div>
        <input type="text" className='rounded-2xl h-10 bg-[#F7F7F8] w-full pl-11 font-medium text-[15px]' placeholder='Введи имя, тег, почту...' />
      </div>

      <div>
        <ul className='flex justify-start ml-4 h-9 items-center font-medium text-[15px] text-[#97979B]'>
          <li className='px-3 h-full flex items-center border-b-2 border-[#6534FF] font-semibold text-black'>Все</li>
          <li className='px-3 h-full flex items-center'>Designers</li>
          <li className='px-3 h-full flex items-center'>Analysts</li>
          <li className='px-3 h-full flex items-center'>Managers</li>
          <li className='px-3 h-full flex items-center'>iOS</li>
          <li className='px-3 h-full flex items-center'>Android </li>
        </ul>
        <hr />
      </div>

    </div>
  )
}

export default TopAppBarComponent