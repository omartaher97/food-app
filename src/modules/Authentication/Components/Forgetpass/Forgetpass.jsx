import React from 'react'
import logo from '../../../../assets/images/logo.png'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Forgetpass() {
  
  const navigate=useNavigate();

  let{
    register,
    handleSubmit,
    formState:{errors},
  }=useForm();

  const onSubmit= async(data)=>{
  
    try {
      let response= await axios.post("https://upskilling-egypt.com:3006/api/v1/Users/Reset/Request",data)
      toast.success(response.data.message);
      navigate("/resetpass")
    } catch (error) {
      toast.error(error.response.data.message);
      
    }


  }





  return (
    <>
     <div className="Auth-container">
      <div className="container-fluid  vh-100 bg-overlay">
        <div className="row vh-100  justify-content-center align-items-center">
          <div className="col-md-6 bg-white p-4 border border-3 rounded">
              <div className='text-center'><img src={logo} alt="" className='w-25 logo' /></div>
              <div className="form-content py-3">
                <h3>Forgot Your Password?</h3>
                <p className='text-muted'>No worries! Please enter your email and we will send a password reset link </p>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-group mb-3 py-4">
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
               
               
              
                <button onClick={navigate('/resetpass')} className='btn btn-success form-control'>Submit</button>
                </form>
                

              </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}
