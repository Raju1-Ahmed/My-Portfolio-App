import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
