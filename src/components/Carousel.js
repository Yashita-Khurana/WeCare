import React from 'react'
import './Carousel.css'
import carousel2 from '../carousel2.png';
import carousel3 from '../carousel3.jpg';
import carousel7 from '../carousel7.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
function Carousel() {
<<<<<<< HEAD
  return (
    <div>
=======
    return (
        <div className="parent">
    
>>>>>>> 5ad9c2fe846f89be24ac82dc673d0f18606de24f
      <div id="carousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active" >
            <div className="img1">
<<<<<<< HEAD
              <video className="video" autoPlay loop muted>
                <source src="video.mp4" type="video/mp4" />
              </video>
              <div className="caption">
                <h1 className="intro"><b>YOGA</b></h1>
                <h2>YOGA SE HI HOGA🌚🌚🌚!</h2>
              </div>
=======
              <video  classaName="video" autoPlay loop muted>
                <source src="yoga.mp4" type="video/mp4"></source>
              </video>
              {/* <img src={carousel2} width="100%" height="50%"/> */}
            <div className="caption">
          
              <h1 className="intro">Mental Peace First</h1>
              <h2>Keep a check on your mental health with us.</h2>
            </div>
>>>>>>> 5ad9c2fe846f89be24ac82dc673d0f18606de24f
            </div>
          </div>

          <div className="carousel-item">
            <div className="img1">
              <img className="img1" src={carousel3}  width="100%" height="100%"/>
              <div className="caption">
                <h1 className="intro">Family first</h1>
                <h2>Take care of your precious family during these tough times</h2>
              </div>
            </div>
          </div>


          <div className="carousel-item" >
            <div className="img1">
              <img src={carousel7} width="100%" height="100%" />
              <div className="caption">
                <h1 className="intro">Know your health</h1>
                <h2>Have an idea to boost your immunity with right things.</h2>
              </div>
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