import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Jumbo from './JumbotronYoga';
import Crds from './YogaCards';
import Blog from './YogaAasans';
function Yoga() {
  return (
    <div>
       <Navbar/>
       <Jumbo/>
       <Crds/>
       <Blog/>
       <Footer/>
    </div>
  );
}

export default Yoga;
