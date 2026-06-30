import axios from 'axios';

const LOCAL_BASE_URL = 'http://localhost:8080/api/v1';
const PROD_BASE_URL = 'https://myportfolioserver-0ekq.onrender.com/api/v1';

export const resolveApiBaseUrl = async () => {
  if (process.env.REACT_APP_API_BASE_URL) {
    return process.env.REACT_APP_API_BASE_URL;
  }

  if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
    return LOCAL_BASE_URL;
  }

  return PROD_BASE_URL;
};

export const apiRequest = async (config) => {
  const baseUrl = await resolveApiBaseUrl();
  return axios({
    ...config,
    url: `${baseUrl}${config.url}`,
  });
};

export const getErrorMessage = (error, fallbackMessage = 'Something went wrong.') => {
  const responseData = error?.response?.data;

  if (typeof responseData === 'string') {
    return responseData;
  }

  if (responseData && typeof responseData === 'object') {
    return responseData.message || responseData.error || fallbackMessage;
  }

  if (typeof error?.message === 'string' && error.message.trim()) {
    return error.message;
  }

  return fallbackMessage;
};

export const resetResolvedApiBaseUrl = () => {
  return undefined;
};
