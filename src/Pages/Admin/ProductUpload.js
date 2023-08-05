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

  const [uploadProgress, setUploadProgress] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);


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

       // Simulate upload progress (replace this with actual upload progress)
       for (let progress = 0; progress <= 100; progress += 10) {
        await new Promise((resolve) => setTimeout(resolve, 500));
        setUploadProgress(progress);
      }

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

      setIsModalOpen(true);
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
          <label>Description: <p className="text-sm ">Total characters: 538 to 545 for standard</p> </label>
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

   {/* Progress bar */}
   {uploadProgress < 100 && (
          <div className="w-full px-4 lg:w-5/12">
            <div className="mb-4">
              <div className="relative h-2 w-full bg-gray-300 rounded-full">
                <div
                  className="absolute h-2 bg-primary rounded-full"
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
            </div>
          </div>
        )}

        {/* After insertion modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center">
            <div className="modal">
              <div className="modal-box">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => setIsModalOpen(false)}>✕</button>
                <h3 className="font-bold text-lg">Data Inserted!</h3>
                <p className="py-4">Press ESC key or click on ✕ button to close</p>
              </div>
            </div>
          </div>
        )}


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
