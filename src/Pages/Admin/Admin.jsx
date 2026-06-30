import React, { useEffect, useState } from 'react';
import download from 'downloadjs';
import { PROJECT_CATEGORIES } from '../utils/constants';
import { apiRequest, getErrorMessage } from '../utils/api';

const initialAnalytics = {
  totals: {
    totalEvents: 0,
    pageViews: 0,
    clicks: 0,
    sessions: 0,
    visitors: 0,
    sessionEnds: 0,
  },
  topPages: [],
  topClicks: [],
  topSources: [],
  topCountries: [],
  sessionDurations: {
    averageSessionDurationMs: 0,
    longestSessionDurationMs: 0,
  },
  topDevices: [],
  topBrowsers: [],
  recentEvents: [],
};

const Admin = () => {
  const [filesList, setFilesList] = useState([]);
  const [projects, setProjects] = useState([]);
  const [messages, setMessages] = useState([]);
  const [analytics, setAnalytics] = useState(initialAnalytics);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploadingResume, setIsUploadingResume] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [lastRefreshed, setLastRefreshed] = useState(null);
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
    setIsLoading(true);
    try {
      const [filesResult, projectsResult, messagesResult] = await Promise.allSettled([
        apiRequest({ url: '/files' }),
        apiRequest({ url: '/projects' }),
        apiRequest({ url: '/messages' }),
      ]);

      if (filesResult.status === 'fulfilled') setFilesList(filesResult.value.data);
      if (projectsResult.status === 'fulfilled') setProjects(projectsResult.value.data);
      if (messagesResult.status === 'fulfilled') setMessages(messagesResult.value.data);

      setErrorMsg('');
      setLastRefreshed(new Date());
    } catch (error) {
      setErrorMsg(getErrorMessage(error, 'Unable to load admin data.'));
    } finally {
      setIsLoading(false);
    }
  };

  const fetchAnalyticsData = async () => {
    try {
      const analyticsResult = await apiRequest({ url: '/analytics/summary' });
      setAnalytics(analyticsResult.data);
    } catch (error) {
      console.error('Unable to load analytics data:', error);
    }
  };

  useEffect(() => {
    fetchDashboardData();
    fetchAnalyticsData();
  }, []);

  const refreshDashboard = async () => {
    await fetchDashboardData();
    await fetchAnalyticsData();
  };

  const downloadFile = async (_id, filepath, mimetype) => {
    try {
      const result = await apiRequest({
        url: `/files/${_id}/download`,
        responseType: 'blob',
      });

      const filename = filepath?.split('/').pop();
      if (!filename) {
        throw new Error('Invalid file path.');
      }

      setErrorMsg('');
      return download(result.data, filename, mimetype);
    } catch (error) {
      setErrorMsg(getErrorMessage(error, 'Error while downloading file. Try again later'));
    }
  };

  const handleDeleteResume = async (id) => {
    try {
      await apiRequest({ url: `/files/${id}`, method: 'DELETE' });
      setFilesList((prevFiles) => prevFiles.filter((file) => file._id !== id));
      setSuccessMsg('Resume deleted successfully.');
      setErrorMsg('');
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
      await apiRequest({
        url: '/files/upload',
        method: 'POST',
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setSelectedFile(null);
      setSuccessMsg('Resume uploaded successfully.');
      setErrorMsg('');
      await fetchDashboardData();
    } catch (error) {
      setErrorMsg(getErrorMessage(error, 'Something went wrong during file upload.'));
    } finally {
      setIsUploadingResume(false);
    }
  };

  const handleProjectFieldChange = (event) => {
    const { name, value } = event.target;
    setProjectData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleProjectVideoChange = (event) => {
    setProjectData((prevData) => ({ ...prevData, videoFile: event.target.files[0] }));
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

      await apiRequest({ url: '/projects', method: 'POST', data: payload });
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
      setSuccessMsg('Project created successfully.');
      setErrorMsg('');
      await refreshDashboard();
    } catch (error) {
      setErrorMsg(getErrorMessage(error, 'Error creating project.'));
    }
  };

  const handleDeleteProject = async (id) => {
    try {
      await apiRequest({ url: `/projects/${id}`, method: 'DELETE' });
      setProjects((prev) => prev.filter((project) => project._id !== id));
      setSuccessMsg('Project deleted successfully.');
      setErrorMsg('');
    } catch (error) {
      setErrorMsg('Error deleting project.');
    }
  };

  const summaryCards = [
    { label: 'Resumes', value: filesList.length },
    { label: 'Projects', value: projects.length },
    { label: 'Messages', value: messages.length },
  ];

  const trafficCards = [
    { label: 'Visitors', value: analytics.totals.visitors },
    { label: 'Sessions', value: analytics.totals.sessions },
    { label: 'Page Views', value: analytics.totals.pageViews },
    { label: 'Clicks', value: analytics.totals.clicks },
    { label: 'Session Ends', value: analytics.totals.sessionEnds },
    {
      label: 'Avg Visit',
      value: analytics.sessionDurations?.averageSessionDurationMs
        ? `${Math.round(analytics.sessionDurations.averageSessionDurationMs / 1000)}s`
        : '0s',
    },
  ];

  const formatLastRefreshed = lastRefreshed
    ? lastRefreshed.toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' })
    : 'Not synced yet';

  return (
    <div className="admin-page">
      <div className="dashboard-hero section-shell">
        <div className="dashboard-hero__copy">
          <span className="eyebrow">Admin Control Center</span>
          <h1>Advanced portfolio dashboard</h1>
          <p>
            Manage resumes, projects, messages, and visitor analytics from a polished command center designed for
            quick scanning and fast edits.
          </p>
          <div className="dashboard-hero__actions">
            <button type="button" className="primary-button" onClick={refreshDashboard}>
              Refresh Dashboard
            </button>
            <span className="dashboard-hero__meta">Last synced: {formatLastRefreshed}</span>
          </div>
        </div>

        <div className="dashboard-hero__stats">
          {summaryCards.map((card) => (
            <div key={card.label} className="dashboard-hero__stat">
              <span>{card.label}</span>
              <strong>{card.value}</strong>
            </div>
          ))}
        </div>
      </div>

      <div className="section-shell">
        {isLoading && <div className="empty-state">Loading dashboard data...</div>}
        {errorMsg && <div className="empty-state">{errorMsg}</div>}
        {successMsg && <div className="success-state">{successMsg}</div>}
      </div>

      <div className="dashboard-layout section-shell">
        <main className="dashboard-main">
          <section className="admin-card admin-card--accent">
            <h3>Resume Upload</h3>
            <p>Upload a PDF so the hero section can serve the latest resume download.</p>
            <input type="file" accept="application/pdf" onChange={(event) => setSelectedFile(event.target.files[0])} />
            {selectedFile && <div className="file-selection-chip">{selectedFile.name}</div>}
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

          <section className="admin-card">
            <div className="section-heading section-heading--compact">
              <span className="eyebrow">Resume Vault</span>
              <h3>Stored files</h3>
            </div>
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
                          <div className="table-action-group">
                            <button type="button" onClick={() => downloadFile(_id, filePath, file_mimetype)}>Download</button>
                            <button type="button" onClick={() => handleDeleteResume(_id)}>Delete</button>
                          </div>
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
            <div className="section-heading section-heading--compact">
              <span className="eyebrow">Projects</span>
              <h3>Portfolio projects</h3>
            </div>
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
                          <div className="table-action-group">
                            <button type="button" onClick={() => handleDeleteProject(project._id)}>Delete</button>
                          </div>
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
            <div className="section-heading section-heading--compact">
              <span className="eyebrow">Inbox</span>
              <h3>Client messages</h3>
            </div>
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

          <section className="admin-card">
            <div className="section-heading section-heading--compact">
              <span className="eyebrow">Activity</span>
              <h3>Recent events</h3>
            </div>
            <div className="admin-table-wrap">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>Type</th>
                    <th>Path</th>
                    <th>Country</th>
                    <th>Device</th>
                  </tr>
                </thead>
                <tbody>
                  {analytics.recentEvents.length > 0 ? analytics.recentEvents.map((event) => (
                    <tr key={event._id}>
                      <td>{new Date(event.createdAt).toLocaleString()}</td>
                      <td>{event.eventType}</td>
                      <td>{event.path}</td>
                      <td>{event.country || 'Unknown'}</td>
                      <td>{event.deviceType || 'Unknown'}</td>
                    </tr>
                  )) : (
                    <tr><td colSpan={5}>No events recorded yet.</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>
        </main>

        <aside className="dashboard-rail">
          <section className="admin-card admin-card--sticky">
            <h3>Traffic Analytics</h3>
            <p>Visitor sessions, page views, clicks, source, device, and approximate location.</p>
            <div className="admin-summary-grid admin-summary-grid--compact">
              {trafficCards.map((card) => (
                <div key={card.label} className="admin-stat-card">
                  <span>{card.label}</span>
                  <strong>{card.value}</strong>
                </div>
              ))}
            </div>

            <div className="dashboard-stack">
              <div className="mini-panel">
                <h4>Top Pages</h4>
                <table className="admin-table">
                  <tbody>
                    {analytics.topPages.length > 0 ? analytics.topPages.map((item) => (
                      <tr key={item.label}>
                        <td>{item.label}</td>
                        <td>{item.count}</td>
                      </tr>
                    )) : (
                      <tr><td colSpan={2}>No page data yet.</td></tr>
                    )}
                  </tbody>
                </table>
              </div>

              <div className="mini-panel">
                <h4>Traffic Sources</h4>
                <table className="admin-table">
                  <tbody>
                    {analytics.topSources.length > 0 ? analytics.topSources.map((item) => (
                      <tr key={item.label}>
                        <td>{item.label || 'Direct'}</td>
                        <td>{item.count}</td>
                      </tr>
                    )) : (
                      <tr><td colSpan={2}>No source data yet.</td></tr>
                    )}
                  </tbody>
                </table>
              </div>

              <div className="mini-panel">
                <h4>Top Clicks</h4>
                <table className="admin-table">
                  <tbody>
                    {analytics.topClicks.length > 0 ? analytics.topClicks.map((item) => (
                      <tr key={item.label}>
                        <td>{item.label}</td>
                        <td>{item.count}</td>
                      </tr>
                    )) : (
                      <tr><td colSpan={2}>No click data yet.</td></tr>
                    )}
                  </tbody>
                </table>
              </div>

              <div className="mini-panel">
                <h4>Location</h4>
                <table className="admin-table">
                  <tbody>
                    {analytics.topCountries.length > 0 ? analytics.topCountries.map((item) => (
                      <tr key={item.label}>
                        <td>{item.label}</td>
                        <td>{item.count}</td>
                      </tr>
                    )) : (
                      <tr><td colSpan={2}>No location data yet.</td></tr>
                    )}
                  </tbody>
                </table>
              </div>

              <div className="mini-panel">
                <h4>Devices</h4>
                <table className="admin-table">
                  <tbody>
                    {analytics.topDevices.length > 0 ? analytics.topDevices.map((item) => (
                      <tr key={item.label}>
                        <td>{item.label}</td>
                        <td>{item.count}</td>
                      </tr>
                    )) : (
                      <tr><td colSpan={2}>No device data yet.</td></tr>
                    )}
                  </tbody>
                </table>
              </div>

              <div className="mini-panel">
                <h4>Top Browsers</h4>
                <table className="admin-table">
                  <tbody>
                    {analytics.topBrowsers.length > 0 ? analytics.topBrowsers.map((item) => (
                      <tr key={item.label}>
                        <td>{item.label}</td>
                        <td>{item.count}</td>
                      </tr>
                    )) : (
                      <tr><td colSpan={2}>No browser data yet.</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
};

export default Admin;
