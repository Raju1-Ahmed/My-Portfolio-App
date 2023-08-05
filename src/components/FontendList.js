import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FontendList = () => {
  const [frontendProducts, setFrontendProducts] = useState([]);

  useEffect(() => {
    fetchFrontendProducts();
  }, []);

  const fetchFrontendProducts = async () => {
    try {
      const response = await axios.get('https://myportfolioserver-0ekq.onrender.com/api/v1/file/fontend');
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
              {/* Render other product details as needed */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FontendList;
