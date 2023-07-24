import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../utils/constants';
import './productstyle.css';

const ProductDelete = () => {
  const [products, setProducts] = useState([]);

  // Function to fetch all products from the backend
  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${API_URL}/product`);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Function to handle product deletion
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/product/${id}`);
      // Refresh the list of products after deletion
      fetchProducts();
      console.log('Product deleted successfully!');
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div>
      <h2>Product List</h2>
      <table className="product-table">
        <thead>
          <tr>
            <th>Name</th>
            {/* <th>Description</th>
            <th>Demo URL</th>
            <th>Server URL</th>
            <th>Client URL</th> */}
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.name}</td>
              {/* <td>{product.description}</td> */}
              {/* <td>{product.demoURL}</td> */}
              {/* <td>{product.serverURL}</td> */}
              {/* <td>{product.clientURL}</td> */}
              <td>{product.date}</td>
              <td>
                <button onClick={() => handleDelete(product._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductDelete;
