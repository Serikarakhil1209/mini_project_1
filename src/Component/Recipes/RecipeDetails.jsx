import React from 'react';
import { useParams } from 'react-router-dom';
import './RecipesDetails.css';

function RecipeDetails({ RecipeData }) {
  const { id } = useParams();
  const recipe = RecipeData.find(item => item.id === parseInt(id));

  const handleAddBtn = () => {
    let allData = JSON.parse(localStorage.getItem("itemsDetail")) || [];
    let isPresent = allData.some(item => item.id === recipe.id);
    if (!isPresent) {
      allData.push(recipe);
      localStorage.setItem("itemsDetail", JSON.stringify(allData));
      
      // 👇 Dispatch custom event to update cart count
      window.dispatchEvent(new Event("cartChanged"));

      alert("Added to cart");
    } else {
      alert("Already present in the cart");
    }
  };

  const handleLikeBtn = () => {
    let likeData = JSON.parse(localStorage.getItem("Likeitem")) || [];
    let isPresent = likeData.some(item => item.id === recipe.id);
    if (isPresent) {
      alert("Already present in Like list");
    } else {
      likeData.push(recipe);
      localStorage.setItem("Likeitem", JSON.stringify(likeData));
      alert("Added to Like list");
    }
  };

  return (
    <div className="recipe-details-container">
      {recipe ? (
        <div className="recipe-card">
          <h2 className="recipe-title">{recipe.name}</h2>
          <img className="recipe-image" src={recipe.image} alt={recipe.name} />
          <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
          <p><strong>Prep Time:</strong> {recipe.prepTimeMinutes} minutes</p>
          <p><strong>Cook Time:</strong> {recipe.cookTimeMinutes} minutes</p>
          <div>
            <strong>Ingredients:</strong>
            <ul>
              {recipe.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <strong>Instructions:</strong>
            <ol>
              {recipe.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
          <div className="recipe-buttons">
            <button className="btn-add" onClick={handleAddBtn}>Add to Cart</button>
            <button className="btn-like" onClick={handleLikeBtn}>Like</button>
          </div>
        </div>
      ) : (
        <p className="loading-text">Loading recipe details...</p>
      )}
    </div>
  );
}

export default RecipeDetails;
