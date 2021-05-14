import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faPhone,faEnvelope, faMapMarker } from '@fortawesome/free-solid-svg-icons'
function Footer() {
    return (
        <div className="parent">
            <footer>
            <div className="new_footer_top">

<div className="footer_bg">

    <div className="footer_bg_one"></div>
    <div className="footer_bg_two"></div>
</div>

</div>
                <div className="footer">
                    <div className="column">
                        <ul>
                            <li className="title">LEVIOOSA</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                        </ul>
                    </div>

                    <div className="column">
                        <ul>
                            <li className="title">OTHER LINKS</li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Cookie Policy</a></li>
                            <li><a href="#">Tickets</a></li>
                        </ul>
                    </div>

                    <div className="column">
                        <ul>
                            <li className="title">SHORT CUT</li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Our Services</a></li>
                            <li><a href="#">Our Mission</a></li>
                            <li><a href="#">About Us</a></li>
                        </ul>
                    </div>

                    <div className="column">
                        <ul>
                            <li className="title">NEWSLETTER</li>
                            <li>
                                <form action="#" method="post">
                                    <input type="email" name="email" placeholder="Email*" maxlength="80" required /><button className="btn1"><i className="fa fa-paper-plane"></i></button>
                                </form>
                            </li>
                            <li>
                                <a href="#" title="Address,State,Country,Pincode"><i><FontAwesomeIcon icon={faMapMarker} size='0.6x' style={{ color: "black" }} /></i></a>
                                <a href="#"><i><FontAwesomeIcon icon={faPhone} size='0.6x' style={{ color: "black" }} /></i></a>
                                <a href="#"><i><FontAwesomeIcon icon={faEnvelope} size='0.6x' style={{ color: "black" }} /></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>



            
            <div className="sub-footer">
                INFERNO Copyright © 2021 Inferno - All rights reserved || Designed By: Mahesh
</div>
        </div>
    )
}

export default Footer
