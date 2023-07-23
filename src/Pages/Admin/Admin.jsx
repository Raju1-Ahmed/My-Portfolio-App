import axios from 'axios';
import React, { useState, useEffect } from 'react';
import download from 'downloadjs';
import { API_URL } from '../utils/constants';
import Popup from '../../components/Popup'; // Make sure to update the path if needed

const Admin = () => {
  const [filesList, setFilesList] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const getFilesList = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/find`);
        console.log(data);
        setErrorMsg('');
        setFilesList(data);
      } catch (error) {
        error.response && setErrorMsg(error.response.data);
      }
    };

    getFilesList();
  }, []);

  const downloadFile = async (_id, filepath, mimetype) => {
    console.log('File ID ',_id, 'FilePath:', filepath);
    try {
      const result = await axios.get(`${API_URL}/download/${_id}`, {
        responseType: 'blob'
      });
      
      if (!filepath || typeof filepath !== 'string') {
        throw new Error('Invalid file path.');
      }
  
      const split = filepath.split('/');
      const filename = split[split.length - 1];
      setErrorMsg('');
      return download(result.data, filename, mimetype);
    } catch (error) {
      setErrorMsg(error.message || 'Error while downloading file. Try again later');
    }
  };
  

  const handleDelete = async (id) => {
    try {
      // Make a DELETE request to the backend API to delete the file by ID
      await axios.delete(`${API_URL}/delete/${id}`);

      // If the deletion is successful, update the filesList state to remove the deleted file
      setFilesList((prevFiles) => prevFiles.filter((file) => file._id !== id));
    } catch (error) {
      console.error('Error while deleting the file:', error);
      // Handle any errors during deletion if needed
    }
  };




  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('pdf', selectedFile); // Ensure that the field name 'pdf' matches the backend field name
      await axios.post('http://localhost:8080/api/v1/fileUpload/file-upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('File uploaded successfully!');
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Something went wrong.');
    }
  };

  // Function to show the popup with a specific message
  const displayPopup = (message) => {
    setPopupMessage(message);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000); // Close the popup automatically after 3 seconds (adjust the duration as needed)
  };

  // State for the popup
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  return (
    <div>
      <div>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleFileUpload}>Upload</button>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="files-container">
        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        <table className="files-table">
          <thead>
            <tr>
              <th>ID+</th>
              <th>File Name</th>
              <th>File Path</th>
            </tr>
          </thead>
          <tbody>
            {filesList.length > 0 ? (
              filesList.map(({ _id,  file_mimetype, filename, filePath}) => (
                <tr key={_id}>
                  <td>{_id}</td>
                  <td>{filename}</td>
                  <td>{filePath}</td>
                  <td>
                    <a
                      href="#/"
                      onClick={() => downloadFile(_id, filePath, file_mimetype)}
                    >
                      Download
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} style={{ fontWeight: '300' }}>
                  No files found. Please add some.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="files-container">
      {/* Display the list of files */}
      <table className="files-table">
        {/* Table headers */}
        {/* Table body */}
        <tbody>
          {filesList.length > 0 ? (
            filesList.map(({ _id, filename }) => (
              <tr key={_id}>
                <td>{filename}</td>
                <td>
                  {/* Add a "Delete" button for each file */}
                  <button onClick={() => handleDelete(_id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={2}>No files found. Please add some.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      {/* Popup component */}
      {showPopup && (
        <Popup show={showPopup} onClose={() => setShowPopup(false)} message={popupMessage} />
      )}
    </div>
  );
};

export default Admin;
