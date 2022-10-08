import React from 'react'

function LoadingCard() {
  return (
    <div className="w-full h-20 flex items-center">
      <div className='w-[72px] h-[72px] rounded-full mr-4 bg-gradient-to-r from-[#F3F3F6] to-[#FAFAFA] animate-pulse'>
      </div>
      <div>
        <div className="flex space-x-1 rounded-[50px] w-[144px] h-4 bg-gradient-to-r from-[#F3F3F6] to-[#FAFAFA] animate-pulse">
        </div>
        <div className="flex space-x-1 rounded-[50px] w-20 h-3 mt-[6px] bg-gradient-to-r from-[#F3F3F6] to-[#FAFAFA] animate-pulse">
        </div>
      </div>
    </div>
  )
}

export default LoadingCard