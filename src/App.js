import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Aboutus from './components/Aboutus';
import Footer from './components/Footer';
import Cards from './components/cards';
import Yoga from './components/Yoga';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';
function App() {
  return (
    
    <div className="App">
       <Router>
       <Switch>
       <Route exact path="/">
         <Navbar/>
         <Carousel/>
         <Aboutus/>
         <Cards/>
         <Footer/>
       </Route>
       <Route path="/yoga" exact component={Yoga}/>
       </Switch>
       </Router> 
    </div>
    
  );
}

export default App;
