import React, { useEffect, useState } from 'react'
import Header from '../../../Shared/Components/Header/Header'
import headImg from '../../../../assets/images/header.png'
import axios from 'axios';
import Nodata from '../../../Shared/Components/Nodata/Nodata';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Deletedata from "../../../Shared/Components/Deletedata/Deletedata";
export default function Recipestlist() {

  const [RecipeId, setRecipeId] = useState(0);

  const [deleteshow, setdeleteShow] = useState(false);

  const handledeleteClose = () => setdeleteShow(false);
  const handledeleteShow = (id) => {
    setdeleteShow(true);
    setRecipeId(id);
  }


  const [Recipeslist, setRecipeslist] = useState([]);

  const getRecipeslist= async()=>{

    try {
      let response= await axios.get("https://upskilling-egypt.com:3006/api/v1/Recipe/?pageSize=10&pageNumber=1",{ headers:{ Authorization: `Bearer ${localStorage.getItem("token")} `}})
  
      setRecipeslist(response.data.data);
     
  
    } catch (error) {
      
      
    }
  
  }




  
const onDeleteSubmit= async()=>{

  
  try {
    let response= await axios.delete(`https://upskilling-egypt.com:3006/api/v1/Recipe/${RecipeId}`,{ headers:{ Authorization: `Bearer ${localStorage.getItem("token")} `}})

    handledeleteClose();
    getRecipeslist();
    

  } catch (error) {
   
  }
   
}

  useEffect(() => {

    getRecipeslist();
  
   
  }, [])


  return (
    <>


    <Header
    title={`Recipes Items`}
    description={'You can now add your items that any user can order it from the Application and you can edit'}
    imgUrl={headImg}
    />



    
<Modal show={deleteshow} onHide={handledeleteClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body >
           <Deletedata deleteItem={'Recipe'}/>
        </Modal.Body>


        <Modal.Footer >
         
          <Button className="form-control"  variant="danger" onClick={onDeleteSubmit}>
            Delete
          </Button>
        </Modal.Footer>
       
      </Modal>







<div className="container-fluid p-3 my-3 mb-4 px-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div>
              <h2>Recipe Table Details</h2>
              <span>You can check all details</span>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            <div>
              <button  className="btn btn-success">Add new Item</button>
            </div>
          </div>
        </div>

        <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Item Name</th>
      <th scope="col">Image</th>
      <th scope="col">Price</th>
      <th scope="col">describtion</th>
      <th scope="col">Category</th>

      
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
        {Recipeslist.length>0 ? Recipeslist.map((Recipe,index)=>
          <tr key={Recipe.id}>
          <th scope="row">{index+1}</th>
          <td>{Recipe.name}</td>
          <td>{Recipe.imagePath? <img className='recipe-img' src={'https://upskilling-egypt.com:3006/'+Recipe.imagePath} alt="recipe img" />:<span>no Image</span>}</td>
          <td>{Recipe.price}</td>
          <td>{Recipe.description}</td>
          <td>{Recipe.tag.name}</td>
          <td>
             <i  className="fas fa-edit mx-3 text-info  "></i>
             <i onClick={()=>handledeleteShow(Recipe.id)} className="fa fa-trash text-danger" aria-hidden="true"></i>
          </td>
        </tr>):<Nodata/>}
  
  </tbody>
</table>
      </div>

    
    </>
  )
}
