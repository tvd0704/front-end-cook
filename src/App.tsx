import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import { Home } from './pages/home';
import { Login } from './pages/login';
import { Recipes } from './pages/recipes';
import {Admin} from './admin/index';
import { Register } from './pages/register';
import { Chefs } from './pages/chefs';
import { CardRecipe} from './pages/recipes/card';
import { GetCard } from './pages/recipes/getcard';


function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/recipes/:recipeId" element={<Recipes/>}></Route>
        <Route path="/admin" element={<Admin/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/chefs' element={<Chefs/>}></Route>
        <Route path='/card' element={<CardRecipe/>}></Route>
        <Route path='/recipes' element={<GetCard/>}></Route> 
     
      </Routes>

    </div>
  );
}

export default App;
