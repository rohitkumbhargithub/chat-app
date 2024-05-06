import React from 'react'

const UserProfile = () => {
  return (
    <>
    <div className='flex justify-start ml-2 p-4'>
            <div className='avatar w-11 h-11 rounded-full bg-rose-300'>
                <h1 className='text-white text-lg flex justify-center align-middle mt-2 ml-3'>RR</h1>
                <span className="w-3 h-3 rounded-full bg-green-500 border-2 border-white absolute bottom-0 right-0"></span>
            </div>
      <div className='ml-2'>
        <span className='text-gray-500 font-bold'>Rolande Raimondi</span>
        <span className='label-text block'>Research Nurse</span>
      </div>
    </div>
    </>
  )
}

export default UserProfile