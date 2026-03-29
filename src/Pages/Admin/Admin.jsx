import axios from 'axios';
import React, { useState, useEffect } from 'react';
import download from 'downloadjs';
import { API_ENDPOINTS, PROJECT_CATEGORIES } from '../utils/constants';

const Admin = () => {
  const [filesList, setFilesList] = useState([]);
  const [projects, setProjects] = useState([]);
  const [messages, setMessages] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploadingResume, setIsUploadingResume] = useState(false);
  const [projectData, setProjectData] = useState({
    name: '',
    description: '',
    demoURL: '',
    serverURL: '',
    clientURL: '',
    date: '',
    futureField: 'FullStack',
    videoFile: null,
  });

  const fetchDashboardData = async () => {
    try {
      const [filesResponse, projectResponse, messageResponse] = await Promise.all([
        axios.get(API_ENDPOINTS.files),
        axios.get(API_ENDPOINTS.projects),
        axios.get(API_ENDPOINTS.messages),
      ]);

      setFilesList(filesResponse.data);
      setProjects(projectResponse.data);
      setMessages(messageResponse.data);
      setErrorMsg('');
    } catch (error) {
      setErrorMsg(error.response?.data || 'Unable to load admin data.');
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const downloadFile = async (_id, filepath, mimetype) => {
    try {
      const result = await axios.get(`${API_ENDPOINTS.files}/${_id}/download`, {
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

  const handleDeleteResume = async (id) => {
    try {
      await axios.delete(`${API_ENDPOINTS.files}/${id}`);
      setFilesList((prevFiles) => prevFiles.filter((file) => file._id !== id));
    } catch (error) {
      setErrorMsg('Error while deleting the file.');
    }
  };

  const handleResumeUpload = async () => {
    if (!selectedFile) {
      setErrorMsg('Please choose a PDF resume file first.');
      return;
    }

    try {
      setIsUploadingResume(true);
      const formData = new FormData();
      formData.append('pdf', selectedFile);
      await axios.post(`${API_ENDPOINTS.files}/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setSelectedFile(null);
      await fetchDashboardData();
    } catch (error) {
      setErrorMsg('Something went wrong during file upload.');
    } finally {
      setIsUploadingResume(false);
    }
  };

  const handleProjectFieldChange = (event) => {
    const { name, value } = event.target;
    setProjectData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleProjectVideoChange = (event) => {
    setProjectData((prevData) => ({
      ...prevData,
      videoFile: event.target.files[0],
    }));
  };

  const uploadVideo = async () => {
    if (!projectData.videoFile) {
      throw new Error('Please choose a project demo video.');
    }

    const formData = new FormData();
    formData.append('file', projectData.videoFile);
    formData.append('upload_preset', 'videoupload');

    const cloudinaryResponse = await fetch('https://api.cloudinary.com/v1_1/dmrxamgbh/video/upload', {
      method: 'POST',
      body: formData,
    });

    const cloudinaryData = await cloudinaryResponse.json();

    if (!cloudinaryData.secure_url) {
      throw new Error('Video upload failed.');
    }

    return cloudinaryData.secure_url;
  };

  const handleProjectSubmit = async (event) => {
    event.preventDefault();

    try {
      const videoURL = await uploadVideo();

      const payload = {
        name: projectData.name,
        description: projectData.description,
        demoURL: projectData.demoURL,
        serverURL: projectData.serverURL,
        clientURL: projectData.clientURL,
        date: projectData.date,
        futureField: projectData.futureField,
        video: {
          filePath: videoURL,
          filename: projectData.videoFile.name,
          file_mimetype: projectData.videoFile.type,
        },
      };

      await axios.post(API_ENDPOINTS.projects, payload);
      setProjectData({
        name: '',
        description: '',
        demoURL: '',
        serverURL: '',
        clientURL: '',
        date: '',
        futureField: 'FullStack',
        videoFile: null,
      });
      await fetchDashboardData();
    } catch (error) {
      setErrorMsg(error.message || 'Error creating project.');
    }
  };

  const handleDeleteProject = async (id) => {
    try {
      await axios.delete(`${API_ENDPOINTS.projects}/${id}`);
      setProjects((prev) => prev.filter((project) => project._id !== id));
    } catch (error) {
      setErrorMsg('Error deleting project.');
    }
  };

  const summaryCards = [
    { label: 'Resumes', value: filesList.length },
    { label: 'Projects', value: projects.length },
    { label: 'Messages', value: messages.length },
  ];

  return (
    <div className="admin-page">
      <div className="section-shell section-block">
        <div className="section-heading">
          <span className="eyebrow">Admin</span>
          <h2>Manage resume files, portfolio projects, and incoming messages from one dashboard.</h2>
          <p>This page now uses the same structured API as the public portfolio.</p>
        </div>

        {errorMsg && <div className="empty-state">{errorMsg}</div>}

        <div className="admin-summary-grid">
          {summaryCards.map((card) => (
            <div key={card.label} className="admin-stat-card">
              <span>{card.label}</span>
              <strong>{card.value}</strong>
            </div>
          ))}
        </div>

        <div className="admin-grid">
          <section className="admin-card">
            <h3>Resume Upload</h3>
            <p>Upload a PDF so the hero section can serve the latest resume download.</p>
            <input type="file" accept="application/pdf" onChange={(event) => setSelectedFile(event.target.files[0])} />
            <button type="button" className="primary-button" onClick={handleResumeUpload} disabled={isUploadingResume}>
              {isUploadingResume ? 'Uploading...' : 'Upload Resume'}
            </button>
          </section>

          <section className="admin-card">
            <h3>Create Project</h3>
            <form className="admin-form" onSubmit={handleProjectSubmit}>
              <input type="text" name="name" placeholder="Project name" value={projectData.name} onChange={handleProjectFieldChange} required />
              <textarea name="description" placeholder="Project description" value={projectData.description} onChange={handleProjectFieldChange} required />
              <input type="url" name="demoURL" placeholder="Demo URL" value={projectData.demoURL} onChange={handleProjectFieldChange} required />
              <input type="url" name="serverURL" placeholder="Server URL" value={projectData.serverURL} onChange={handleProjectFieldChange} required />
              <input type="url" name="clientURL" placeholder="Client URL" value={projectData.clientURL} onChange={handleProjectFieldChange} required />
              <input type="date" name="date" value={projectData.date} onChange={handleProjectFieldChange} required />
              <select name="futureField" value={projectData.futureField} onChange={handleProjectFieldChange}>
                {PROJECT_CATEGORIES.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <input type="file" accept="video/*" onChange={handleProjectVideoChange} required />
              <button type="submit" className="primary-button">Create Project</button>
            </form>
          </section>
        </div>

        <section className="admin-card">
          <h3>Resume Files</h3>
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Path</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filesList.length > 0 ? (
                  filesList.map(({ _id, file_mimetype, filename, filePath }) => (
                    <tr key={_id}>
                      <td>{filename}</td>
                      <td>{filePath}</td>
                      <td>
                        <button type="button" onClick={() => downloadFile(_id, filePath, file_mimetype)}>Download</button>
                        <button type="button" onClick={() => handleDeleteResume(_id)}>Delete</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={3}>No resume files found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        <section className="admin-card">
          <h3>Projects</h3>
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {projects.length > 0 ? (
                  projects.map((project) => (
                    <tr key={project._id}>
                      <td>{project.name}</td>
                      <td>{project.futureField}</td>
                      <td>{new Date(project.date).toLocaleDateString()}</td>
                      <td>
                        <button type="button" onClick={() => handleDeleteProject(project._id)}>Delete</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4}>No projects found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        <section className="admin-card">
          <h3>Client Messages</h3>
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Subject</th>
                  <th>Email</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {messages.length > 0 ? (
                  messages.map((message) => (
                    <tr key={message._id}>
                      <td>{message.name}</td>
                      <td>{message.subject}</td>
                      <td>{message.clientEmail}</td>
                      <td>{new Date(message.date).toLocaleDateString()}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4}>No messages yet.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Admin;
