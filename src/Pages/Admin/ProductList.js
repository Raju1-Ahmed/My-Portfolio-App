// src/components/ProductList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../utils/constants';
import './productstyle.css'; // Import your CSS styles

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    // Fetch all products from the backend
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${API_URL}/product`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  const handleProductClick = (productId) => {
    // Find the selected product from the products list
    const selected = products.find((product) => product._id === productId);
    setSelectedProduct(selected);
  };

  const renderProductList = () => {
    return (
      <div className="product-list-container">
        <h2>Product List</h2>
        <ul className="product-list grid grid-cols-4 gap-6">
          {products.map((product) => (
            <li key={product._id} className="product-item ">
              <h3>{product.name}</h3>
              <h3>{product.futureField}</h3>
              <button onClick={() => handleProductClick(product._id)}>View Details</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const renderProductDetails = () => {
    if (!selectedProduct) {
      return <p>Loading...</p>;
    }

    return (
      <div className="product-details-container">
        <h2>{selectedProduct.name}</h2>
        <p className="product-description">Description: {selectedProduct.description}</p>
        <p>Demo URL: {selectedProduct.demoURL}</p>
        <h2>futureField: {selectedProduct.futureField}</h2>
        <p>Server URL: {selectedProduct.serverURL}</p>
        <p>Client URL: {selectedProduct.clientURL}</p>
        <p>Date: {selectedProduct.date}</p>
        <div className="video-container">
          <video controls className="product-video">
            <source src={selectedProduct.videoURL} type={selectedProduct.video.file_mimetype} />
            Your browser does not support the video tag.
          </video>
        </div>
        <button onClick={() => setSelectedProduct(null)}>Back to List</button>
      </div>
    );
  };

  return (
    <div className="product-list-page">
      {selectedProduct ? renderProductDetails() : renderProductList()}
    </div>
  );
};

export default ProductList;
