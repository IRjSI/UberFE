import React from 'react'

function VehiclePanel(props) {


  return (
    <div>
        <h5 onClick={() => props.setVehiclePanelOpen(false)} className='text-2xl absolute right-5'><i className="ri-arrow-down-wide-line"></i></h5>
        <h2 className='font-semibold text-xl mb-5'>Choose Ride</h2>
        <div onClick={() => {
            props.setConfirmRidePanelOpen(true)
        }} className='border-2 border-black rounded-xl mb-3 flex justify-between items-center w-full p-3'>
          <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1652995234/assets/92/8d4288-e896-4333-9bc2-c60c49f2a095/original/UberXL_Black_v2.png" alt="" />
          <div className='w-1/2'>
            <h4 className='font-medium text-base'>UberGo</h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Lorem ipsum dolor sit amet.</p>
          </div>
          <h2 className='font-semibold text-xl'>$240</h2>
        </div>
    </div>
  )
}

export default VehiclePanel
