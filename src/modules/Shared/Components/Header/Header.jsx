import React from 'react'

export default function Header({title,description,imgUrl}) {
  return (
    <>
    <div className="container-fluid header-container p-3  ">
      <div className="row justify-content-center align-items-center ">

        <div className="col-md-8">
          <div className="content ps-4 ">
          <h2>{title}</h2>
          <p>{description}</p>

          </div>
          
        </div>


        <div className="col-md-4 text-center ">
        <div>
          <img className='w-50 ' src={imgUrl} alt="logo" />
        </div>
        </div>

      </div>
    </div>
    
    
    </>
  )
}
