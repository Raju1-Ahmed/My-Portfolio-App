import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home';
import HireMe from './Pages/Hire/HireMe';
import { Routes, Route, } from "react-router-dom";

function App() {

  return (
    <div className=" bg-white dark:bg-black">
      <Navbar ></Navbar>
      <Home></Home>
      
      <Routes>
        <Route path="/home" element={ <Home/> } />
        <Route path="/hireMe" element={ <HireMe/> } />
        
      </Routes>
      </div> 
  );
}

export default App;
