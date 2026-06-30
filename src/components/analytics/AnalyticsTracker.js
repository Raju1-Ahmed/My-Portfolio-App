import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { apiRequest } from '../../Pages/utils/api';

const VISITOR_ID_KEY = 'portfolio_visitor_id';
const SESSION_ID_KEY = 'portfolio_session_id';
const SESSION_STARTED_KEY = 'portfolio_session_started';
const SESSION_STARTED_AT_KEY = 'portfolio_session_started_at';

const getApiBaseUrl = () => {
  if (process.env.REACT_APP_API_BASE_URL) {
    return process.env.REACT_APP_API_BASE_URL;
  }

  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    return 'http://localhost:8080/api/v1';
  }

  return 'https://myportfolioserver-0ekq.onrender.com/api/v1';
};

const getStoredId = (key) => {
  const storage = key === SESSION_ID_KEY ? sessionStorage : localStorage;
  let value = storage.getItem(key);

  if (!value) {
    value = window.crypto?.randomUUID ? window.crypto.randomUUID() : `${Date.now()}-${Math.random()}`;
    storage.setItem(key, value);
  }

  return value;
};

const getTrafficSource = () => {
  const params = new URLSearchParams(window.location.search);
  return {
    utmSource: params.get('utm_source') || '',
    utmMedium: params.get('utm_medium') || '',
    utmCampaign: params.get('utm_campaign') || '',
    utmTerm: params.get('utm_term') || '',
    utmContent: params.get('utm_content') || '',
  };
};

const getBasePayload = () => ({
  visitorId: getStoredId(VISITOR_ID_KEY),
  sessionId: getStoredId(SESSION_ID_KEY),
  referrer: document.referrer || '',
  screenWidth: window.innerWidth,
  screenHeight: window.innerHeight,
  language: navigator.language || '',
  userAgent: navigator.userAgent || '',
  title: document.title || '',
  ...getTrafficSource(),
});

const sendAnalyticsEvent = async (eventType, extra = {}) => {
  try {
    await apiRequest({
      url: '/analytics/events',
      method: 'POST',
      data: {
        eventType,
        path: `${window.location.pathname}${window.location.search}${window.location.hash}`,
        ...getBasePayload(),
        ...extra,
      },
    });
  } catch (error) {
    // Analytics should never block the experience.
  }
};

const sendSessionEndEvent = () => {
  const startedAt = Number(sessionStorage.getItem(SESSION_STARTED_AT_KEY) || Date.now());
  const payload = {
    eventType: 'session_end',
    path: `${window.location.pathname}${window.location.search}${window.location.hash}`,
    sessionDurationMs: Date.now() - startedAt,
    ...getBasePayload(),
  };

  const body = JSON.stringify(payload);
  const url = `${getApiBaseUrl()}/analytics/events`;

  if (navigator.sendBeacon) {
    const blob = new Blob([body], { type: 'application/json' });
    navigator.sendBeacon(url, blob);
    return;
  }

  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
    keepalive: true,
  }).catch(() => {});
};

const AnalyticsTracker = () => {
  const location = useLocation();
  const clickHandlerRef = useRef(null);

  useEffect(() => {
    if (!sessionStorage.getItem(SESSION_STARTED_KEY)) {
      sessionStorage.setItem(SESSION_STARTED_KEY, '1');
      sessionStorage.setItem(SESSION_STARTED_AT_KEY, String(Date.now()));
      sendAnalyticsEvent('session_start');
    }
  }, []);

  useEffect(() => {
    sendAnalyticsEvent('page_view');
  }, [location.pathname, location.search, location.hash]);

  useEffect(() => {
    const handleClick = (event) => {
      const target = event.target.closest('a, button, [role="button"]');
      if (!target || target.closest('[data-analytics-ignore="true"]')) {
        return;
      }

      const text = (target.innerText || target.getAttribute('aria-label') || target.textContent || '')
        .replace(/\s+/g, ' ')
        .trim()
        .slice(0, 120);

      sendAnalyticsEvent('click', {
        elementTag: target.tagName.toLowerCase(),
        elementText: text,
        elementHref: target.getAttribute('href') || '',
      });
    };

    clickHandlerRef.current = handleClick;
    document.addEventListener('click', handleClick, true);
    window.addEventListener('pagehide', sendSessionEndEvent);

    return () => {
      if (clickHandlerRef.current) {
        document.removeEventListener('click', clickHandlerRef.current, true);
      }
      window.removeEventListener('pagehide', sendSessionEndEvent);
    };
  }, []);

  return null;
};

export default AnalyticsTracker;
