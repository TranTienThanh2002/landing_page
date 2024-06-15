import logo from './logo.svg';
import './App.css';
import Popular from './Components/Popular/Popular';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Offers from './Components/Offers/Offers';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Popular/>
    <Offers/>
    <About/>
    <Blog/>
    <Footer/>
    </>
    
  );
}

export default App;
