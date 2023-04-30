import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import './reset.css';

// COMPONENTES
import Inicio from './componentes/inicio/Inicio';
import About from './componentes/about/About';



//RUTAS
const rutas = createBrowserRouter([
  {path:'/', element:<Inicio/>},
  {path:'home', element:<Inicio/>},
  {path:'about', element: <About/>},
  {path:'*', element:<h1>Opps, ruta no encontrada</h1>}

  

]);



ReactDOM.createRoot(document.getElementById('root')).render(
 
   <RouterProvider router={rutas}/>
  
)
