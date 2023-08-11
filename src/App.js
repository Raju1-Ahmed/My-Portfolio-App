import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import HireMe from './Pages/Hire/HireMe';
import { Routes, Route, } from "react-router-dom";
import Admin from './Pages/Admin/Admin';
import Resume from './Pages/Home/Resume';

function App() {

  return (
    <div className=" bg-white dark:bg-black">
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
