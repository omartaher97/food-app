import React from 'react'
import logo from '../../../../assets/images/logo.png'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login({saveLoginData}) {
  
  const navigate=useNavigate();

  let{
    register,
    handleSubmit,
    formState:{errors},
  }=useForm();

  const onSubmit= async(data)=>{
  
    try {
      let response= await axios.post("https://upskilling-egypt.com:3006/api/v1/Users/Login",data)
      localStorage.setItem('token',response.data.token)
      saveLoginData();
      toast.success(response.data.message);
      navigate("/Dashboard")
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
                <div className="input-group mb-3">
                 <span className="input-group-text" id="basic-addon1"><i className='fa fa-key'></i></span>
                  <input type="password" className="form-control" placeholder="password" {...register("password",{required:"password is required"})}/>
                </div>
                {errors.password && <p className='alert alert-danger'>{errors.password.message}</p>}
                <div className="links d-flex justify-content-between my-3">
                  
                  <Link to={'/register'}>Register Now?</Link>
                  <Link to={'/forgetpass'}>Forgot Password?</Link>
                </div>
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
