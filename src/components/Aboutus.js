import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClinicMedical } from '@fortawesome/free-solid-svg-icons';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { faHandHoldingMedical } from '@fortawesome/free-solid-svg-icons';
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import './Aboutus.css'
function Aboutus() {
    return (
        <div>
            <div class="box">
    <div class="box-sm red"></div>
    <div class="box-sm orange"></div>
    <div class="box-sm yellow "></div>
    <div class="box-sm green "></div>
    <div class="box-sm blue1 "></div>
    <div class="box-sm purple"></div>
  </div>

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
                                            <h2 className="font-weight-light">Welcome to WeCare</h2>
                                            <span>
                                                <FontAwesomeIcon icon={faHeartbeat} style={{ color: "black" }} />
                                            </span>
                                            <p className="font-italic text-muted mb-4">WeCare is a Covid healthcare Website that includes tips to take care of your health during Covid Times through Yoga, Diet plans and selfcare tips for all age groups.</p>
                                        </div>
                                    </div>
                                </div>


                                <div  class="card back">
                                    <div class="card-block">
                                    <h1 id="abouthead" className="display-4">Family Healthcare at One Stop</h1>
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
                                    <h1 id="abouthead" className="display-4">Sanitize Well</h1>
                                </div>
                                    <div class="card-block">
                                        {/* <h4 class="card-title">Special title treatment</h4>
                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a> */}
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
                                    <h1 id="abouthead" className="display-4">Stay Home Stay Safe</h1>
                                </div>
                                    <div class="card-block">
                                        {/* <h4 class="card-title">Special title treatment</h4>
                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                    </div>
                                    <div class="card-footer text-muted">
                                        {/* 2 days ago */}
                                </div>
                                </div>
                            </div>
                        </div>


                        <div class="col-md-6 card-container">
                            <div class="card-flip">
                                <div class="card front text-right">
                                    <div class="card-block">
                                        <div id="lora" className="about">
                                            <h2 className="font-weight-light">Immunity Wins</h2>
                                            <span>
                                                <FontAwesomeIcon icon={faHeartbeat} size='0.6x' style={{ color: "black" }} />
                                            </span>
                                            <p className="font-italic text-muted mb-4">During such times, It becomes mandatory to take care of yours and your family's health. Keep a check on your immunity with us.</p>
                                        </div>
                                    </div>
                                </div>


                                <div class="card back text-center">
                                    <div class="card-block">
                                    <h1 id="abouthead" className="display-4">Boost Your Immunity</h1>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>


            
            <div class="box">
    <div class="box-sm red"></div>
    <div class="box-sm orange"></div>
    <div class="box-sm yellow "></div>
    <div class="box-sm green "></div>
    <div class="box-sm blue1 "></div>
    <div class="box-sm purple"></div>
  </div>
            <section id="service">
                <div className="container-fluid text-center">
                    <h2>SERVICES</h2>
                    <h4>What we offer</h4>
                    <br></br>
                    <div className="row slideanim">
                        <div className="col-sm-4">
                            <span className="glyphicon glyphicon-off logo-small"></span>
                            <FontAwesomeIcon icon={faHandHoldingMedical} size='3x' style={{ color: "black" }} />
                            <h4>CARE</h4>
                            <p>We Care for You and your family..</p>
                        </div>
                        <div className="col-sm-4">
                            <span className="glyphicon glyphicon-heart logo-small"></span>
                            <FontAwesomeIcon icon={faUtensils} size='3x' style={{ color: "black" }} />
                            <h4>DIET TIPS</h4>
                            <p>Diet that includes immunity rich Foods...</p>
                        </div>
                        <div className="col-sm-4">
                            <span className="glyphicon glyphicon-lock logo-small"></span>
                            <FontAwesomeIcon icon={faClinicMedical} size='3x' style={{ color: "black" }} />
                            <h4>HEALTH TIPS</h4>
                            <p>Healthcare tips for COVID Times..</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Aboutus
