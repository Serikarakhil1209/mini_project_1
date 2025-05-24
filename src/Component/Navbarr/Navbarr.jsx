import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Navbarr.css';
import { FcLike } from "react-icons/fc";
import { BsCart3 } from "react-icons/bs";
import { Link } from 'react-router-dom';

function Navbarr() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCount = () => {
      const data = JSON.parse(localStorage.getItem("itemsDetail")) || [];
      setCartCount(data.length);
    };

    updateCount(); // Initial count

    // 👂 Listen for cart changes
    window.addEventListener("cartChanged", updateCount);

    return () => {
      window.removeEventListener("cartChanged", updateCount);
    };
  }, []);

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container id="main">
        <Navbar.Brand href="#home">AKKI</Navbar.Brand>
        <div id="sec_div">
          <Link to="/" className="dec_non">Recipes</Link>
          <Link to="/Liked" className="dec_non"><FcLike /></Link>
          <Link to="/cart" className="dec_non" style={{ position: 'relative' }}>
            <BsCart3 />
            {cartCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '-5px',
                right: '-10px',
                background: 'red',
                color: 'white',
                borderRadius: '50%',
                padding: '2px 6px',
                fontSize: '12px'
              }}>
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </Container>
    </Navbar>
  );
}

export default Navbarr;
