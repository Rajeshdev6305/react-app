import React, { useState, useEffect } from 'react';
import './UseEffect.css';
import Loader from '../Loader';

const UseEffect = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [cartTotal, setCartTotal] = useState(0);
  const [showCart, setShowCart] = useState(false); 

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  useEffect(() => {
    const total = Object.values(cart).reduce((sum, item) => sum + item.price * item.quantity, 0);
    setCartTotal(total);
  
    setShowCart(Object.keys(cart).length > 0);
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const updatedCart = {
        ...prevCart,
        [product.id]: {
          ...product,
          quantity: prevCart[product.id] ? prevCart[product.id].quantity + 1 : 1,
        },
      };
      return updatedCart;
    });
  };

  const buyNow = (product) => {
    alert(`Proceeding to checkout with ${product.title}`);
  };

  const incrementQuantity = (productId) => {
    setCart((prevCart) => ({
      ...prevCart,
      [productId]: {
        ...prevCart[productId],
        quantity: prevCart[productId].quantity + 1,
      },
    }));
  };

  const decrementQuantity = (productId) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[productId].quantity > 1) {
        updatedCart[productId].quantity -= 1;
      } else {
        delete updatedCart[productId];
      }
      setShowCart(Object.keys(updatedCart).length > 0);
      return updatedCart;
    });
  };

  const totalItemsInCart = Object.values(cart).reduce((total, item) => total + item.quantity, 0);
<Loader/>
  return (
    <div className="container">
      <h1 className="title">Store</h1>
      <div className={`product-container ${showCart ? 'show-3-cols' : ''}`}>
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} className="product-image" />
              <h2 className="product-title">{product.title}</h2>
              <p className="product-price">Price: ${product.price}</p>
              <p className="product-description">
                <strong>Description:</strong> {product.description}
              </p>
              <p className="product-category"><strong>Category:</strong> {product.category}</p>
              <button className="add-to-cart-btn" onClick={() => addToCart(product)}>Add to Cart</button>
              <button className="buy-now-btn" onClick={() => buyNow(product)}>Buy Now</button>
            </div>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>

      {showCart && (
        <div className="cart-container">
          <h1 className="cart-title">
            Cart <span className="cart-item-count">{totalItemsInCart}</span>
          </h1>
          {Object.keys(cart).length > 0 ? (
            <div>
              {Object.values(cart).map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.title} className="cart-item-image" />
                  <h2>{item.title}</h2>
                  <p>Price: ${item.price}</p>
                  <p>Category: {item.category}</p>
                  <p>Description: {item.description}</p>
                  <p>Quantity: {item.quantity}</p>
                  <button onClick={() => decrementQuantity(item.id)}>-</button>
                  <button onClick={() => incrementQuantity(item.id)}>+</button>
                </div>
              ))}
              <h2>Total: ${cartTotal}</h2>
              <button className="checkout-btn">Proceed to Checkout</button>
            </div>
          ) : (
            <p>Cart is empty</p>
          )}
        </div>
      )}
    </div>
  );
};

export default UseEffect
