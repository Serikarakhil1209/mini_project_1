
import Navbarr from './Component/Navbarr/Navbarr'
import { Route , Routes } from 'react-router-dom'
import Recipes from './Component/Recipes/Recipes'
import Liked from './Component/Liked/Liked'
import Cart from './Component/Cart/Cart'
import NotFound from './Component/NotFound'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeDetails from './Component/Recipes/RecipeDetails'

function App() {
    const [rec, SetRec] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/recipes')
      .then((res) => {
        console.log(res.data.recipes);
        SetRec(res.data.recipes);
      })
      .catch((err) => {
        console.error('Error fetching recipes:', err);
      });
  }, []);

  return (
    <div>
    <Navbarr/>
    <Routes>
     <Route  path='/'   element={<Recipes  RecipeData = {rec}/>}  />
     <Route path='/Recipes/:id' element={<RecipeDetails RecipeData={rec} />} />
     <Route  path='/Liked'   element={<Liked/>}  />
     <Route  path='/cart'   element={<Cart/>}  />
     <Route  path='/*'   element={<NotFound/>}  />
    </Routes>



    </div>
  )
}

export default App