import React from 'react'
import './Isolation.css'
import Navbar from './Navbar'
import Footer from './Footer'
import Tips from './Tips'
import { TimerSharp } from '@material-ui/icons'
function Isolation() {
    return (
        <div>
<Navbar/>
            
                
                <section id="ban" class="banner">
                    <div  id="cont" class="container">
                        <h1>Home Isolation<span id="th"class="text-highlight"> is not a struggle</span></h1>
                        <div id="fiw" class="flex-item-wrapper">
                            <p>We Care provides a list of guidelines and tips which might come in handy while handling patients in Home Isolation/ Quarantine.</p>
                            <a class="action-btn action-btn--lg" href="https://www.who.int/docs/default-source/searo/whe/coronavirus19/the-guideline-for-home-quarantine---quarantine-in-non-health-care-settings-is-intended-for-anyone-who-believes-they-have-been-exposed-to-covid-19-and-are-required-to-be-home-quarantined-to-prevent-community-trans.pdf?sfvrsn=1bc12565_4" title="Proceed to your curriculum">GUIDELINES FOR QUARANTINE</a>
                        </div>
                    </div>
                </section>           
<Tips/>
<Footer/>
        </div >
    )
}

export default Isolation
