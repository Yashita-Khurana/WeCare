import React from 'react'
import './Carousel.css'
import carousel2 from '../carousel2.png';
import carousel3 from '../carousel3.jpg';
import carousel7 from '../carousel7.jpg';
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
              <video classname="video" autoPlay muted loop>
                <source src="yoga.mp4" type="video/mp4" />
              </video>

              <div className="caption">

                <h1 className="intro">Mental Peace First</h1>
                <h2>Keep a check on your mental health with us.</h2>
              </div>
            </div>

          </div>

          <div className="carousel-item">
            <img className="img1" src="https://www.gannett-cdn.com/presto/2019/06/24/PNM6/bf78f543-286a-4723-91e5-0ce91fa805db-gay.JPG?crop=3790,2131,x0,y0&width=3200&height=1800&format=pjpg&auto=webp" />
            <div className="caption">
              <h1 className="intro">Family first</h1>
              <h2>Take care of your precious family during these tough times</h2>




            </div>
          </div>

          <div className="carousel-item" >
            <img src={carousel7} width="100%" height="100%" />
            <div className="caption">
              <h1 className="intro">Know your health</h1>
              <h2>Have an idea to boost your immunity with right things.</h2>
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