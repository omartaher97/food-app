import React from 'react'
import avatar from '../../../../assets/images/avatar.png'

export default function Navbar({loginData}) {




  
  return (
   <>
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">

  
    <input   className='form-control rounded-4'  placeholder= ' Search here' type="text" />


    <div className="" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
       
        <li className="nav-item p-2 me-3 d-flex justify-content-center align-items-center">

          <span className='pe-3'><img src={avatar} alt="profile picture" /></span>
          
          <span>{loginData?.userName}</span>

          
         
        </li>
      
      </ul>
    
    </div>
  </div>
</nav>
   
   </>
  )
}
