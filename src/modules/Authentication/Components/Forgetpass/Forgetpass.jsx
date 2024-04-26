import React from 'react'

export default function Forgetpass() {
  return (
    <>
     <div className="Auth-container">
      <div className="container-fluid  vh-100 bg-overlay">
        <div className="row vh-100  justify-content-center align-items-center">
          <div className="col-md-6 bg-white p-4 border border-3 rounded">
              <div className='text-center'><img src={logo} alt="" className='w-25 logo' /></div>
              <div className="form-content">
                <h3>Log In</h3>
                <p className='text-muted'>Welcome Back! Please enter your details</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-group mb-3">
                 <span className="input-group-text" id="basic-addon1"><i className='fa fa-envelope'></i></span>
                  <input type="email" className="form-control" placeholder="Enter your E-mail" 
                  {...register("email",
                  {required:'Email is required',
                  pattern:{
                    value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                    message:"Invaild email"
                  }})} />
                </div>
                {errors.email && <p className='alert alert-danger'>{errors.email.message}</p>}
               
               
              
                <button className='btn btn-success form-control'>login</button>
                </form>
                

              </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}
