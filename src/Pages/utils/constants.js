const getApiBaseUrl = () => {
  if (process.env.REACT_APP_API_BASE_URL) {
    return process.env.REACT_APP_API_BASE_URL;
  }

  if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
    return 'http://localhost:8080/api/v1';
  }

  return 'https://myportfolioserver-0ekq.onrender.com/api/v1';
};

export const API_BASE_URL = getApiBaseUrl();

export const API_ENDPOINTS = {
  files: `${API_BASE_URL}/files`,
  projects: `${API_BASE_URL}/projects`,
  messages: `${API_BASE_URL}/messages`,
};

export const PROJECT_CATEGORIES = ['FullStack', 'Frontend', 'React', 'Static'];
