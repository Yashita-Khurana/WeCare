import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import './Aboutus.css'
function Aboutus() {
    return (
        <div>
         <section id="about">
            <div className="abouthead">
                <h1 id="abouthead" className="display-4">ABOUT US</h1>
            </div>


            <div class="container">
                <div class="row">
                    <div class="col-md-6 card-container">
                        <div class="card-flip">
                            <div class="card front">
                                <span class="fa fa-4x fa-smile-o text-center"></span>
                                <div class="card-block">
                                    <div className="about">
                                        <h2 className="font-weight-light">Lorem ipsum dolor sit amet</h2>
                                        <span>
                                            <FontAwesomeIcon icon={faUsers} size='0.6x' style={{ color: "black" }} />
                                        </span>
                                        <p className="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><a href="#" className="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
                                    </div>
                                </div>
                            </div>


                            <div class="card back">
                                <div class="card-block">
                                    <h4 class="card-title">Back Card Title</h4>
                                    <h6 class="card-subtitle mb-2 text-muted">Back Card subtitle</h6>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="card-link">Card link</a>
                                    <a href="#" class="card-link">Another link</a>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div class="col-md-6 card-container">
                        <div class="card-flip">
                            <div class="card front">
                                <div class="card-block">
                                    <video className="video" autoPlay loop muted>
                                        <source src="videoaboutus.mp4" type="video/mp4" />
                                    </video>
                                </div>
                            </div>


                            <div class="card back">
                                <div class="card-header">
                                    Featured
                                </div>
                                <div class="card-block">
                                    <h4 class="card-title">Special title treatment</h4>
                                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-md-6 card-container">
                        <div class="card-flip">
                            <div class="card front">
                                <div class="card-block">
                                    <video className="video" autoPlay loop muted>
                                        <source src="videoaboutus2.mp4" type="video/mp4" />
                                    </video>
                                </div>
                            </div>


                            <div class="card back text-center">
                                <div class="card-header">
                                    Featured
                                </div>
                                <div class="card-block">
                                    <h4 class="card-title">Special title treatment</h4>
                                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                                <div class="card-footer text-muted">
                                    2 days ago
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-md-6 card-container">
                        <div class="card-flip">
                            <div class="card front text-right">
                                <div class="card-block">
                                    <div className="about">
                                        <h2 className="font-weight-light">Lorem ipsum dolor sit amet</h2>
                                        <span>
                                            <FontAwesomeIcon icon={faUsers} size='0.6x' style={{ color: "black" }} />
                                        </span>
                                        <p className="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><a href="#" className="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
                                    </div>
                                </div>
                            </div>


                            <div class="card back text-center">
                                <div class="card-block">
                                    <h4 class="card-title">Back Title aligned to the center</h4>
                                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


          </section>
           <section id="teams">
            <div className="bg-light-py-5-1  justify-content-center">
                <div className="container-py-5-1 justify-content-center">
                    <div className="row-mb-4 justify-content-center">
                        <div className="col-lg-5-1 justify-content-center">
                            <h2 className="display-4-font-weight-light justify-content-center">OUR TEAM</h2>
                            <p className="font-italic-text-muted-1 justify-content-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                    </div>

                    <div id="team" className="row justify-content-center">
                        <div class="col-sm-3 mb-5 justify-content-center">
                        <div id="yashu" className="bg-white rounded-shadow py-5 justify-content-center"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834132/avatar-4_ozhrib.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                <h5 className="mb-0">YASHITA</h5><span className="small text-uppercase text-muted">Team-Leader</span>
                                <ul className="social mb-0 list-inline mt-3">
                                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
                                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
                                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
                                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-sm-3 mb-5">
                        <div id="himu" className="bg-white rounded-shadow py-5 justify-content-center"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834130/avatar-3_hzlize.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                <h5 className="mb-0">HIMANSHU</h5><span className="small text-uppercase text-muted">Vehlla</span>
                                <ul className="social mb-0 list-inline mt-3">
                                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
                                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
                                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
                                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-sm-3 mb-5">
                        <div id="tara"className="bg-white rounded-shadow py-5 justify-content-center"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834133/avatar-2_f8dowd.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                <h5 className="mb-0">TARAN</h5><span className="small text-uppercase text-muted">Star</span>
                                <ul className="social mb-0 list-inline mt-3">
                                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
                                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
                                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
                                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
<hr className="new5"></hr>
           <section id="service">
            <div className="container-fluid text-center">
                <h2>SERVICES</h2>
                <h4>What we offer</h4>
                <br></br>
                <div className="row slideanim">
                    <div className="col-sm-4">
                        <span className="glyphicon glyphicon-off logo-small"></span>
                        <FontAwesomeIcon icon={faPowerOff} size='3x' style={{ color: "black" }} />
                        <h4>POWER</h4>
                        <p>Lorem ipsum dolor sit amet..</p>
                    </div>
                    <div className="col-sm-4">
                        <span className="glyphicon glyphicon-heart logo-small"></span>
                        <FontAwesomeIcon icon={faHeart} size='3x' style={{ color: "black" }} />
                        <h4>LOVE</h4>
                        <p>Lorem ipsum dolor sit amet..</p>
                    </div>
                    <div className="col-sm-4">
                        <span className="glyphicon glyphicon-lock logo-small"></span>
                        <FontAwesomeIcon icon={faBriefcase} size='3x' style={{ color: "black" }} />
                        <h4>JOB DONE</h4>
                        <p>Lorem ipsum dolor sit amet..</p>
                    </div>
                </div>
            </div>
            </section>
        </div>
    )
}

export default Aboutus
