import React from 'react'

function LocationSearchPanel(props) {


  return (
    <div className='flex flex-col gap-2'>
      <div onClick={() => {
        props.setVehiclePanelOpen(true)
        props.setPanelOpen(false)
      }} className='flex justify-start items-center'>
        <h2 className='bg-[#eeeeee] rounded-full py-2 px-3 mr-2'><i className="ri-map-pin-5-fill"></i></h2>
        <h4>24B, near adiaisdj adsasd</h4>
      </div>
      <div className='flex justify-start items-center'>
        <h2 className='bg-[#eeeeee] rounded-full py-2 px-3 mr-2'><i className="ri-map-pin-5-fill"></i></h2>
        <h4>24B, near adiaisdj adsasd</h4>
      </div>
      <div className='flex justify-start items-center'>
        <h2 className='bg-[#eeeeee] rounded-full py-2 px-3 mr-2'><i className="ri-map-pin-5-fill"></i></h2>
        <h4>24B, near adiaisdj adsasd</h4>
      </div>
      <div className='flex justify-start items-center'>
        <h2 className='bg-[#eeeeee] rounded-full py-2 px-3 mr-2'><i className="ri-map-pin-5-fill"></i></h2>
        <h4>24B, near adiaisdj adsasd</h4>
      </div>
      <div className='flex justify-start items-center'>
        <h2 className='bg-[#eeeeee] rounded-full py-2 px-3 mr-2'><i className="ri-map-pin-5-fill"></i></h2>
        <h4>24B, near adiaisdj adsasd</h4>
      </div>
    </div>
  )
}

export default LocationSearchPanel
