import React from 'react'
import InputComponent from './InputComponent'

function TopAppBarComponent() {
  return (
    <div className='w-full h-[152px] flex flex-col justify-between'>

      <div className='mx-6 mt-4'>
        <h1 className='font-bold text-2xl'>Поиск</h1>
      </div>

      <InputComponent />

      <div>
        <ul className='flex justify-start ml-4 h-9 items-center font-medium text-[15px] text-[#97979B]'>
          <li className='px-3 h-full flex items-center border-b-2 border-custom-purple font-semibold text-black'>Все</li>
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