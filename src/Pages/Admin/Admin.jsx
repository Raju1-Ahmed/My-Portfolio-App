import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment'
import { useNavigate } from 'react-router-dom';




const Admin = () => {
   
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
    };
  
    const handleFileUpload = () => {
      const formData = new FormData();
      formData.append('file', selectedFile);
  
      axios.post('/upload', formData)
        .then((response) => {
          console.log('File uploaded successfully:', response.data);
        })
        .catch((error) => {
          console.error('Error uploading file:', error);
        });
    };



    return (
        <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload</button>
    </div>
    );
};

export default Admin;