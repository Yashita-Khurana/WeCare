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





            <div className="abouthead">
                <h1 id="abouthead" className="display-4">ABOUT US</h1>
            </div>

            <section className="text-center about">
                <div className="bg-white py-5">
                    <div className="container py-5">
                        <div className="row align-items-center mb-5">
                            <div className="col-lg-6 order-2 order-lg-1">
                                <h2 className="font-weight-light">Lorem ipsum dolor sit amet</h2>
                                <span>
                                    <FontAwesomeIcon icon={faUsers} size='0.6x' style={{ color: "black" }} />
                                </span>
                                <p className="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><a href="#" className="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
                            </div>
                            <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2"></div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-lg-5 px-5 mx-auto"></div>
                            <div className="col-lg-6">
                                <span>
                                    <FontAwesomeIcon icon={faUsers} size='0.6x' style={{ color: "black" }} />
                                </span>
                                <h2 className="font-weight-light">Lorem ipsum dolor sit amet</h2>
                                <p className="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><a href="#" className="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <div className="bg-light-py-5-1">
                <div className="container-py-5-1">
                    <div className="row-mb-4">
                        <div className="col-lg-5-1">
                            <h2 className="display-4-font-weight-light">OUR TEAM</h2>
                            <p className="font-italic-text-muted-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                    </div>



                    <div className="row text-center">

                        <div className="col-xl-3 col-sm-6 mb-5">
                            <div className="bg-white rounded-shadow sm py-5 px 4"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834132/avatar-4_ozhrib.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                <h5 className="mb-0">YASHITA</h5><span className="small text-uppercase text-muted">Team-Leader</span>
                                <ul className="social mb-0 list-inline mt-3">
                                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
                                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
                                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
                                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-xl-3 col-sm-6 mb-5">
                            <div className="bg-white rounded-shadow sm py-5 px 4"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834130/avatar-3_hzlize.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                <h5 className="mb-0">HIMANSHU</h5><span className="small text-uppercase text-muted">Vehlla</span>
                                <ul className="social mb-0 list-inline mt-3">
                                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
                                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
                                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
                                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-xl-3 col-sm-6 mb-5">
                            <div className="bg-white rounded-shadow sm py-5 px 4"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834133/avatar-2_f8dowd.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
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

            
        </div>
    )
}

export default Aboutus
