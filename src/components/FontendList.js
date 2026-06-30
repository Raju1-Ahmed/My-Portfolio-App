import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../Pages/utils/constants';

const FontendList = () => {
  const [frontendProducts, setFrontendProducts] = useState([]);

  useEffect(() => {
    fetchFrontendProducts();
  }, []);

  const fetchFrontendProducts = async () => {
    try {
      const response = await axios.get(`${API_URL}/projects/category/Frontend`);
      setFrontendProducts(response.data);
    } catch (error) {
      console.error('Error fetching frontend products:', error);
    }
  };

  return (
    <div>
      <h2>Frontend Products</h2>
      {frontendProducts.length === 0 ? (
        <p>No frontend products found.</p>
      ) : (
        <ul>
          {frontendProducts.map((product) => (
            <li key={product._id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FontendList;
