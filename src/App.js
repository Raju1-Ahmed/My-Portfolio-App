import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import HireMe from './Pages/Hire/HireMe';
import Admin from './Pages/Admin/Admin';
import Resume from './Pages/Home/Resume';
import AnalyticsTracker from './components/analytics/AnalyticsTracker';

function App() {
  return (
    <div className="app-shell">
      <AnalyticsTracker />
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/hireMe" element={<HireMe />} />
      </Routes>
    </div>
  );
}

export default App;
