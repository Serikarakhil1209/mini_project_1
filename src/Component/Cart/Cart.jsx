import React, { useEffect, useState } from 'react';
import './Cart.css';

function Cart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const GettingData = JSON.parse(localStorage.getItem("itemsDetail")) || [];
    setData(GettingData);
  }, []);

  const handleRemoveBtn = (idToRemove) => {
    const filteredData = data.filter(item => item.id !== idToRemove);
    localStorage.setItem("itemsDetail", JSON.stringify(filteredData));
    setData(filteredData);

    // 👇 Dispatch custom event to update cart count
    window.dispatchEvent(new Event("cartChanged"));
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

export default Cart;
