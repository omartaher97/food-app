import React from 'react'
import logo from '../../../../assets/images/logo.png'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Resetpass() {


  const navigate=useNavigate();

  let{
    register,
    handleSubmit,
    formState:{errors},
  }=useForm();

  const onSubmit= async(data)=>{
  
    try {
      let response= await axios.post("https://upskilling-egypt.com:3006/api/v1/Users/Reset",data)
      toast.success(data.data.message);
      navigate("/login")
    } catch (error) {
      toast.error(error.response.data.message);
      
    }


  }




  return (
    <>
      <ToastContainer />
    <div className="Auth-container">
      <div className="container-fluid  vh-100 bg-overlay">
        <div className="row vh-100  justify-content-center align-items-center">
          <div className="col-md-6 bg-white p-4 border border-3 rounded">
              <div className='text-center'><img src={logo} alt="" className='w-25 logo' /></div>
              <div className="form-content">
                <h3> Reset  Password</h3>
                <p className='text-muted'>Please Enter Your Otp  or Check Your Inbox</p>
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
                {errors.email && <p className='alert alert-danger py-1'>{errors.email.message}</p>}
                <div className="input-group mb-3">
                 <span className="input-group-text" id="basic-addon1"><i class="fa-solid fa-lock"></i></span>
                  <input type="text" className="form-control" placeholder="OTP" 
                  {...register("seed",
                  {required:'OTP is required',
                 })} />
                </div>
                {errors.seed && <p className='alert alert-danger py-1'>{errors.seed.message}</p>}
                <div className="input-group mb-3">
                 <span className="input-group-text" id="basic-addon1"><i class="fa-solid fa-lock"></i></span>
                  <input type="password" className="form-control" placeholder="password" {...register("password",{required:"newPassword is required"})}/>
                </div>
                {errors.password && <p className='alert alert-danger py-1'>{errors.password.message}</p>}
                <div className="input-group mb-3">
                 <span className="input-group-text" id="basic-addon1"><i class="fa-solid fa-lock"></i></span>
                  <input type="password" className="form-control" placeholder="password" {...register("confirmPassword",{required:"newPassword is required"})}/>
                </div>
                {errors.confirmPassword && <p className='alert alert-danger py-1'>{errors.confirmPassword.message}</p>}
                
                <button className='btn btn-success form-control'>Reset Password</button>
                </form>
                

              </div>
          </div>
        </div>
      </div>
    </div>
    
    
    
    </>
  )
}
