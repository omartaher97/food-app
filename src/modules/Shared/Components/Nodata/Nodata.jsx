import React from 'react'
import noData from '../../../../assets/images/no-data.png'
export default function Nodata() {
  return (
    <>
    <div className='text-center'>

        <img src={noData} alt="nodata sign" />
        <h3>No data</h3>
    </div>
    
    </>
  )
}
