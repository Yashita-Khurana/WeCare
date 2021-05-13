import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel'
import Aboutus from './components/Aboutus'
function App() {
  return (
    <div className="App">
     <h1>hello world</h1> 
      <Navbar />
      <Carousel/>
      <Aboutus/>
    </div>
  );
}

export default App;
