const DEFAULT_LOCAL_API_URL = 'http://localhost:8080/api/v1';
const DEFAULT_PROD_API_URL = 'https://myportfolioserver-0ekq.onrender.com/api/v1';

export const API_URL =
  process.env.REACT_APP_API_BASE_URL ||
  (typeof window !== 'undefined' && window.location.hostname === 'localhost'
    ? DEFAULT_LOCAL_API_URL
    : DEFAULT_PROD_API_URL);

export const PROJECT_CATEGORIES = ['FullStack', 'Frontend', 'React', 'Static'];
