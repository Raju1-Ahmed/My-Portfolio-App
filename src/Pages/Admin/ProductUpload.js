import React, { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../utils/constants';
import './productstyle.css';
import ProductList from './ProductList';

const ProductUpload = () => {
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    demoURL: '',
    serverURL: '',
    clientURL: '',
    date: '',
    videoFile: null,
    futureField: 'FullStack', // Default value is FullStack
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleVideoChange = (event) => {
    setProductData((prevData) => ({
      ...prevData,
      videoFile: event.target.files[0],
    }));
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', productData.videoFile);
      formData.append('upload_preset', 'videoupload'); // Replace with your upload preset name
      const cloudinaryResponse = await fetch('https://api.cloudinary.com/v1_1/dmrxamgbh/video/upload', {
        method: 'POST',
        body: formData,
      });

      const cloudinaryData = await cloudinaryResponse.json();
      return cloudinaryData.secure_url;
    } catch (error) {
      console.error('Error uploading video:', error);
      throw new Error('Error uploading video');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const videoURL = await handleUpload();

      const productDetails = {
        name: productData.name,
        description: productData.description,
        demoURL: productData.demoURL,
        serverURL: productData.serverURL,
        clientURL: productData.clientURL,
        date: productData.date,
        video: {
          filePath: videoURL,
          filename: productData.videoFile.name,
          file_mimetype: productData.videoFile.type,
        },
        futureField: productData.futureField, // Include futureField in the productDetails object
      };

      await axios.post(`${API_URL}/product`, productDetails);

      console.log('Product created successfully!');
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  return (
    <div>
      <form className="product-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={productData.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <input type="text" name="description" value={productData.description} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Demo URL:</label>
          <input type="text" name="demoURL" value={productData.demoURL} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Server URL:</label>
          <input type="text" name="serverURL" value={productData.serverURL} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Client URL:</label>
          <input type="text" name="clientURL" value={productData.clientURL} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Date:</label>
          <input type="date" name="date" value={productData.date} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Video:</label>
          <input type="file" accept="video/*" name="video" onChange={handleVideoChange} />
        </div>
        <div className="form-group">
          <label>Future Field:</label>
          <select name="futureField" value={productData.futureField} onChange={handleChange}>
            <option value="FullStack">Full Stack</option>
            <option value="Frontend">Frontend</option>
            <option value="React">React</option>
            <option value="Static">Static</option>
          </select>
        </div>
        <button type="submit" className="submit-button">Create Product</button>
      </form>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <ProductList />
    </div>
  );
};

export default ProductUpload;
