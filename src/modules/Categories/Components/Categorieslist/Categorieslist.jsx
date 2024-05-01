import React, { useEffect, useState } from "react";
import headImg from "../../../../assets/images/home-avatar.svg";
import Header from "../../../Shared/Components/Header/Header";
import axios from "axios";
import Nodata from "../../../Shared/Components/Nodata/Nodata";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useForm } from "react-hook-form";

export default function Categorieslist() {

const [Categorieslist, setCategorieslist] = useState([]);

const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



const getCategoriesList= async()=>{

  try {
    let response= await axios.get("https://upskilling-egypt.com:3006/api/v1/Category/?pageSize=10&pageNumber=20",{ headers:{ Authorization: `Bearer ${localStorage.getItem("token")} `}})

    setCategorieslist(response.data.data);
    console.log(response);
    

  } catch (error) {
    
    console.log(error);
  }




  let{
    register,
    handleSubmit,
    formState:{errors},
  }=useForm();

  const onSubmit= async(data)=>{
  
    try {
      let response= await axios.post("https://upskilling-egypt.com:3006/api/v1/Category/",data,{ headers:{ Authorization: `Bearer ${localStorage.getItem("token")} `}})
      toast.success(response.data.message);
      
    } catch (error) {
      toast.error(error.response.data.message);
      
    }


  }


}

useEffect(() => {

  getCategoriesList();

 
}, [])







  return (
    <>
      <Header
        title={`Categories Item`}
        description={
          "You can now add your items that any user can order it from the Application and you can edit"
        }
        imgUrl={headImg}
      />




      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-group mb-3 py-4">
                 
                  <input type="email" className="form-control" placeholder="Category Name " 
                  {...register("name",
                  {required:'Name is required',
                
                  })} />
                </div>
                {errors.name && <p className='alert alert-danger'>{errors.name.message}</p>}
               
               
              
                <button className='btn btn-success form-control'>Save</button>
                </form>
        </Modal.Body>
       
      </Modal>

      <div className="container-fluid p-3 my-3 mb-4 px-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div>
              <h2>Categories Table Details</h2>
              <span>You can check all details</span>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            <div>
              <button onClick={handleShow} className="btn btn-success">Add new categories</button>
            </div>
          </div>
        </div>

        <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Category Name</th>
      <th scope="col">Creation Name</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
        {Categorieslist.length>0 ? Categorieslist.map((Category,index)=>
          <tr key={Category.id}>
          <th scope="row">{index+1}</th>
          <td>{Category.name}</td>
          <td>{Category.creationDate}</td>
          <td>
             <i className="fas fa-edit mx-3 text-info  "></i>
             <i className="fa fa-trash text-danger" aria-hidden="true"></i>
          </td>
        </tr>):<Nodata/>}
  
  </tbody>
</table>
      </div>
    </>
  );
}
