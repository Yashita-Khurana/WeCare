import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Aboutus from './components/Aboutus';
import Footer from './components/Footer';
import Cards from './components/cards';
function App() {
  return (
    <div className="App">
    
       <Navbar /> 
       <Carousel/> 
       <Aboutus/> 
       <Cards/>
       <Footer/> 
    </div>
  );
}

export default App;
