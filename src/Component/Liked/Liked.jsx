import React from 'react'
import { useState,useEffect } from 'react';
function Liked() {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      let GettingData = JSON.parse(localStorage.getItem("Likeitem")) || [];
      setData(GettingData);
    }, []);
  
    const handleRemoveBtn = (idToRemove) => {
      const filteredData = data.filter(item => item.id !== idToRemove);
      localStorage.setItem("Likeitem", JSON.stringify(filteredData));
      setData(filteredData);
    };
  
  return (
    <div className="cart-container">
      <h1 className="cart-title">Cart</h1>
      {data.length === 0 ? (
        <h2 className="cart-empty">Cart is empty</h2>
      ) : (
        data.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p><strong>Cuisine:</strong> {item.cuisine}</p>
              <p><strong>Prep Time:</strong> {item.prepTimeMinutes} mins</p>
              <p><strong>Cook Time:</strong> {item.cookTimeMinutes} mins</p>
            </div>
            <button className="remove-button" onClick={() => handleRemoveBtn(item.id)}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Liked