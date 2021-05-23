import React from 'react'
import './Ourteam.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
function Ourteam() {
    return (
        <div>
            <section id="teams">
                <div className="bg-light-py-5-1  justify-content-center">
                    <div className="container-py-5-1 justify-content-center">
                        <div className="row-mb-4 justify-content-center">
                            <div className="col-lg-5-1 justify-content-center">
                                <h2 id="ourteam"className="display-4-font-weight-light justify-content-center">OUR TEAM</h2>
                                <p className="font-italic-text-muted-1 justify-content-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                        </div>

                        <div id="team" className="row justify-content-center">
                            <div class="col-sm-3 mb-5">
                                <div id="himu" className="bg-white rounded-shadow py-5 justify-content-center">
                                    <div  id="cardTop" class="cardTop">
                                        <img src="https://media-exp1.licdn.com/dms/image/C5603AQG0lul23lo8Hg/profile-displayphoto-shrink_400_400/0/1605716615596?e=1627516800&v=beta&t=5Z_gSRbCb5jdr_H7-7ZziwxcAg5G1g_FcTxfE9SHZw4" alt="" width="30" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                                    </div>
                                    <div id="cardBottom" class="cardBottom">
                                        <div id="cardText"class="cardText">
                                            <h3 id="title" className="mb-0">YASHITA</h3>
                                            <h4 className="small text-uppercase text-muted" id="cardInfo">Student</h4>
                                            <div id="cardHoverText" class="cardHoverText">
                                                <ul className="social mb-0 list-inline mt-3">
                                                    <p id="hidpara">Time pass, tang</p>
                                                    <a href="https://github.com/Yashita-Khurana" className="social-link"><GitHubIcon/></a>
                                                       <a href="#" className="social-link"><InstagramIcon/></a>
                                                       <a href="https://www.linkedin.com/in/yashita-khurana-a70a59168/" className="social-link"><LinkedInIcon/></a>
                                                    </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div class="col-sm-3 mb-5">
                                <div id="himu" className="bg-white rounded-shadow py-5 justify-content-center">
                                    <div id="cardTop" class="cardTop">
                                        <img src="himu.jpg" alt="" width="125" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                    </div>
                                    <div id="cardBottom" class="cardBottom">
                                        <div id="cardText" class="cardText">
                                            <h3 id="title" className="mb-0">HIMANSHU</h3>
                                            <h4 className="small text-uppercase text-muted" id="cardInfo">Student</h4>
                                            <div id="cardHoverText"class="cardHoverText">
                                                <ul className="social mb-0 list-inline mt-3">
                                                    <p id="hidpara">Team member</p>
                                                        
                                                            <a href="https://github.com/himanshu-1808" className="social-link"><GitHubIcon/></a>
                                                       <a href="#" className="social-link"><InstagramIcon/></a>
                                                       <a href="https://www.linkedin.com/in/himanshu-panchal-1a897a1b5/" className="social-link"><LinkedInIcon/></a>
                                                    
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-3 mb-5">
                                <div id="himu" className="bg-white rounded-shadow py-5 justify-content-center">
                                    <div id="cardTop"class="cardTop">
                                        <img src="tara.jpeg" alt="" width="80" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                    </div>
                                    <div id="cardBottom" class="cardBottom">
                                        <div id="cardText" class="cardText">
                                            <h3 id="title" className="mb-0">TARANPREET</h3>
                                            <h4 className="small text-uppercase text-muted" id="cardInfo">Student</h4>
                                            <div id="cardHoverText" class="cardHoverText">
                                                <ul className="social mb-0 list-inline mt-3">
                                                <p id="hidpara">Time pass, tang</p>
                                                    <a href="https://github.com/taranpreet16" className="social-link"><GitHubIcon/></a>
                                                       <a href="#" className="social-link"><InstagramIcon/></a>
                                                       <a href="https://www.linkedin.com/in/himanshu-panchal-1a897a1b5/" className="social-link"><LinkedInIcon/></a>
                                                    </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Ourteam
