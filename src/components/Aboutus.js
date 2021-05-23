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


                <div id="con" class="container">
                    <div id="row" class="row">
                        <div class="col-md-6 card-container">
                            <div class="card-flip">
                                <div id="card"class="card front">
                                    
                                    <div class="card-block">
                                        <div id="lora"className="about">
                                            <h2 className="font-weight-light">Lorem ipsum dolor sit amet</h2>
                                            <span>
                                                <FontAwesomeIcon icon={faUsers} style={{ color: "black" }} />
                                            </span>
                                            <p className="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><a href="#" className="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
                                        </div>
                                    </div>
                                </div>


                                <div  class="card back">
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
                                        <div id="lora" className="about">
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
