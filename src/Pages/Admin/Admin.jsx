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

  const downloadFile = async (id, path, mimetype) => {
    try {
      const result = await axios.get(`${API_URL}/download/${id}`, {
        responseType: 'blob',
      });
      const split = path.split('/');
      const filename = split[split.length - 1];
      setErrorMsg('');

      // Download the file using the 'downloadjs' library
      download(result.data, filename, mimetype);

      // Display a success popup after download
      displayPopup('File downloaded successfully!');
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMsg('Error while downloading file. Try again later');
      }

      // Display an error popup if there's an error during download
      displayPopup('Error downloading file. Please try again later.');
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
              <th>Title</th>
              <th>Description</th>
              <th>Download File</th>
            </tr>
          </thead>
          <tbody>
            {filesList.length > 0 ? (
              filesList.map(({ _id, file_path, file_mimetype, filename, filePath}) => (
                <tr key={_id}>
                  <td>{_id}</td>
                  <td>{filename}</td>
                  <td>{filePath}</td>
                  <td>
                    <a
                      href="#/"
                      onClick={() => downloadFile(_id, file_path, file_mimetype)}
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

      {/* Popup component */}
      {showPopup && (
        <Popup show={showPopup} onClose={() => setShowPopup(false)} message={popupMessage} />
      )}
    </div>
  );
};

export default Admin;
