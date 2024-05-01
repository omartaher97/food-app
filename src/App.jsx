import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Authlayout from "./modules/Shared/Components/Authlayout/Authlayout";
import Notfound from "./modules/Shared/Components/Notfound/Notfound";
import Dashboard from "./modules/Home/Components/Dashboard/Dashboard";
import Login from "./modules/Authentication/Components/Login/Login";
import Register from "./modules/Authentication/Components/Register/Register";
import Forgetpass from "./modules/Authentication/Components/Forgetpass/Forgetpass";
import Resetpass from "./modules/Authentication/Components/Resetpass/Resetpass";
import Masterlayout from "./modules/Shared/Components/Masterlayout/Masterlayout";
import Recipestlist from "./modules/Recipes/Components/Recipeslist/Recipestlist";
import Categorieslist from "./modules/Categories/Components/Categorieslist/Categorieslist";
import Userslist from "./modules/Users/Components/Userslist/Userslist";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import Changepass from "./modules/Authentication/Components/Changepass/Changepass";

function App() {

  const [loginData, setloginData] = useState(null)

  let saveLoginData= ()=>{
    let encodedToken= localStorage.getItem('token')
    let decodedToken= jwtDecode(encodedToken)
    setloginData(decodedToken)
  }
  useEffect(() => {
    if (localStorage.getItem('token')) {
      saveLoginData()
    }
  
   
  }, [])
  
  let routes = createBrowserRouter([
    {
      path: "",
      element: <Authlayout />,
      errorElement: <Notfound />,
      children: [
        {index: true,element:<Login saveLoginData={saveLoginData}/>},
        {path:'login',element:<Login saveLoginData={saveLoginData}/>},
        {path:'register',element:<Register/>},
        {path:'forgetpass',element:<Forgetpass/>},
        {path:'resetpass',element:<Resetpass/>},
        {path:'changepass',element:<Changepass/>},
      ],
    },
    {
      path: "Dashboard",
      element: <Masterlayout loginData={loginData} />,
      errorElement: <Notfound />,
      children: [
        {index: true,element:<Dashboard/>},
        {path: 'Dashboard',element:<Dashboard/>},
        {path:'recipes',element:<Recipestlist/>},
        {path:'categories',element:<Categorieslist/>},
        {path:'users',element:<Userslist/>},
      ],
    },
  ]);

  return <>

  <RouterProvider router={routes}></RouterProvider>
  
  
  </>;
}

export default App;
