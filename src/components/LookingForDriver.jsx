import React from 'react'

function LookingForDriver() {
  return (
    <div>
        <h2 className='font-semibold text-xl mb-5'>Looking For a Driver</h2>
        <div className='flex flex-col justify-between items-center'>
            <img className='h-20' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1652995234/assets/92/8d4288-e896-4333-9bc2-c60c49f2a095/original/UberXL_Black_v2.png" alt="" />
            <div className='w-full'>
                <div className='flex items-center gap-5'>
                    <div className=''>
                        <h3 className='text-lg font-medium'>562/11-A</h3>
                        <p className='text-sm text-gray-600'>Xyz, Abc</p>
                    </div>
                    <div>
                        <h3 className='text-lg font-medium'>562/11-A</h3>
                        <p className='text-sm text-gray-600'>Xyz, Abc</p>
                    </div>
                </div>
                <div>Driver: </div>
                <div></div>
            </div>
        </div>
    </div>
  )
}

export default LookingForDriver
