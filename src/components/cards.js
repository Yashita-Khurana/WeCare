import React from 'react';
import './cards.css';
import img2 from '../carousel2.png';
function cards() {
    return(
        <div>
        <div class="container">
     <div class="row">
  <div class="col-sm-6">
  <div class="cards">
    <div class="card-item">
      <div class="card-image">
          <img src={img2}/>
      </div>
      <div class="card-info">
        <h2 class="card-title">Exploring around</h2>
        <p class="card-intro">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
      </div>
    </div>
   </div>
  </div>
  <div class="col-sm-6">
  <div class="cards">
    <div class="card-item">
      <div class="card-image">
      <img src={img2}/>
      </div>
      <div class="card-info">
        <h2 class="card-title">A new trail you can't miss</h2>
        <p class="card-intro">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
      </div>
    </div>
  </div>
  </div>
  <div class="col-sm-6">
  <div class="cards">
    <div class="card-item">
      <div class="card-image">
      <img src={img2}/>
      </div>
      <div class="card-info">
        <h2 class="card-title">Essential hiking hacks</h2>
        <p class="card-intro">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
      </div>
    </div>
  </div>
  </div>
  <div class="col-sm-6 ">
  <div class="cards">
    <div class="card-item">
      <div class="card-image">
      <img src={img2}/>
      </div>
      <div class="card-info">
        <h2 class="card-title">Discovering this hidden gem</h2>
        <p class="card-intro">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
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