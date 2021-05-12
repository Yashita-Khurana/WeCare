import React from 'react'
import './Carousel.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function Carousel() {
    return (
        <div>
    
      <div id="carousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner" role="listbox">

          <div className="carousel-item active" >
            <div className="img1">
              <img src="ls.jpg" width="100%" height="50%"/>
            <div className="caption">
          
              <h1 className="intro">First page</h1>
              <h2>Make it easy for you to do whatever this thing does.</h2>
            </div>
            </div>
           
          </div>

          <div className="carousel-item">
            <img className="img1"src="ls2.jpg"/>
            <div className="caption">
              <h1 className="intro">Second Page</h1>
              <h2>Else it easy for you to do whatever this thing does.</h2>

          
              
              
            </div>
          </div>
          
          <div className="carousel-item" >
          <img src="ls3.jpg" width="100%" height="100%"/>
            <div className="caption">
              <h1 className="intro">Third Page</h1>
              <h2>Make it easy for you to do whatever this thing does.</h2>
            </div>
          </div>

        </div>
        
        <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>

      </div>
    
     </div>
       
    )
}

export default Carousel

