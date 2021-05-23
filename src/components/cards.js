import React from 'react';
import './cards.css';
import img2 from '../carousel2.png';
import { Link } from 'react-router-dom';

function cards() {
    return(
<div>
  <div class="container1">
    <div class="row">
     <div class="col-sm-6">
       <div class="cards">
         <div class="card-item">
              <div class="card-image">
                <img src="yogacard.jpg"/>
              </div>
              <div class="card-info">
               <h2 class="card-title">Yoga for Immunity</h2>
               <p id="yogatext"class="card-intro">“Yoga is a light, which once lit will never dim.🧘‍♀️”</p>
             </div>
           </div>
       </div>
      </div>
      <div class="col-sm-6">
       <div class="cards">
         <div class="card-item">
              <div class="card-image">
                <img src="dietcard.jpg"/>
              </div>
              <div class="card-info">
               <h2 class="card-title">Diet Plans</h2>
               <p id="yogatext"class="card-intro">"It's never too early or too late to worl towards being the healthiest you.🥝"</p>
             </div>
           </div>
       </div>
      </div>
      <div class="col-sm-6">
       <div class="cards">
         <div class="card-item">
              <div class="card-image">
                <img src="https://media.gettyimages.com/videos/man-in-self-isolation-looking-out-of-the-window-video-id1213516488?s=640x640"/>
              </div>
              <div class="card-info">
               <h2 class="card-title">Home Isolation Tips</h2>
               <p id="yogatext" class="card-intro">"Keep your hands clean, Your head cool and your Heart open.💖"</p>
             </div>
           </div>
       </div>
      </div>
      <div class="col-sm-6">
       <div class="cards">
         <div class="card-item">
              <div class="card-image">
                <img src="https://iocdf.org/wp-content/uploads/2020/04/IOCDF-Self-Care-Header.jpg"/>
              </div>
              <div class="card-info">
               <h2 class="card-title">Self care</h2>
               <p id="yogatext" class="card-intro">"Self care is not self indulgence, It is self preservation.🧼"</p>
             </div>
           </div>
       </div>
      </div>
   </div>
 </div>
</div>
)
}

export default cards