import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Aboutus from './components/Aboutus';
import Footer from './components/Footer';
import Cards from './components/cards';
import Yoga from './components/Yoga';
import Mycard from './components/Mycard'
import Contactus from './components/Contactus'
import Ourteam from './components/Ourteam'
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
         <Ourteam/>
         <Cards/>
         <Footer/>
       </Route>
       <Route path="/yoga" exact component={Yoga}/>
       <Route path="/mycard" exact component={Mycard}/>
       <Route path="/contactus" exact component={Contactus}/>
       </Switch>
       </Router> 
    </div>
    
  );
}

export default App;
