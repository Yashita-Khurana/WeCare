import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faPhone , faEnvelope , faMapMarker, faPaperPlane, faMapMarked, faLocationArrow, faSearchLocation } from '@fortawesome/free-solid-svg-icons'
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
                            <li className="title">WE CARE</li>
                            <li>WeCare is a Covid healthcare Website that includes tips to take care of your health during Covid Times through Yoga, Diet plans and selfcare tips for all age groups.</li>
                        </ul>
                    </div>

                    <div className="column">
                        <ul>
                            <li className="title">OUR SERVICES</li>
                            <li><a href="#">Immunity Yoga</a></li>
                            <li><a href="#">Diet Tips</a></li>
                            <li><a href="#">Home Isolatiom</a></li>
                            <li><a href="#">Self Healthcare</a></li>
                        </ul>
                    </div>

                    <div className="column">
                        <ul>
                            <li className="title">SHORT CUT</li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Our Team</a></li>
                            <li><a href="#">About Us</a></li>
                        </ul>
                    </div>

                    <div className="column">
                        <ul>
                            <li className="title">NEWSLETTER</li>
                            <li>
                                <form action="#" method="post">
                                    <input type="email" name="email" placeholder="Email*" maxlength="80" required /><button className="btn1"><i><FontAwesomeIcon icon={faPaperPlane} size='0.6x' /></i></button>
                                </form>
                            </li>
                            <li>
                                <a href="#" title="Address,State,Country,Pincode"><i><FontAwesomeIcon icon={faSearchLocation} size='0.6x' /></i></a>
                                <a href="#"><i><FontAwesomeIcon icon={faPhone} size='0.6x'  /></i></a>
                                <a href="#"><i><FontAwesomeIcon icon={faEnvelope} size='0.6x'  /></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            



            
            <div className="sub-footer">
                WeCare Copyright © 2021 WeCare - All rights reserved || Designed By: WeCare Studios
            </div>
            </footer>
        </div>
    )
}

export default Footer
