import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel'
import Aboutus from './components/Aboutus'
function App() {
  return (
    <div className="App">
    
      <Navbar />
      <Carousel/>
      <Aboutus/>
    </div>
  );
}

export default App;
