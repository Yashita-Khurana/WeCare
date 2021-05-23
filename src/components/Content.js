import React from 'react'
import './Content.css'
function Content() {
  return (
    <div>
      <hr className="hr-1" />
      <div class="row featurette">
        <div class="col-md-6">
          <h2 class="featurette-heading">INFANTS & CHILDREN<br></br><span class="text1">(0-13 YEARS)</span></h2>
          <p class="lead">
            <ul id="points">
              <li>Have your kids wash their hands immediately after returning home.</li>
              <li>Make sure your child in your household avoids close contact (within about 6 feet, or 2 meters) with anyone who doesn’t live in your household.</li>
              <li>Wash your child's bedding and washable plush toys, as needed, in the warmest possible setting. Dry items completely.</li>
              <li>In addition, keep up with your child's well visits and vaccines. This is especially important for infants and young children under age 2.</li>
            </ul>
          </p>
        </div>
        <div class="col-md-6">
          <img class="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" src="https://i.pinimg.com/564x/df/c9/9b/dfc99b79b923772e08e3a53c050809ab.jpg" data-holder-rendered="true" />
        </div>
      </div>
      <hr className="hr-1" />

      <div class="row featurette">
        <div class="col-md-6">
          <img class="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" src="https://i.pinimg.com/564x/54/f3/a0/54f3a0c295fceb6e4dc30e908abbe582.jpg" data-holder-rendered="true" />
        </div>
        <div class="col-md-6">
          <h2 class="featurette-heading">TEENAGERS & ADULTS<br></br><span class="text1">(14-35 YEARS)</span></h2>
          <p class="lead"><ul id="points">
              <li>Make sure of washing your hands often , covering coughs and sneezes, and avoiding close contact with other people – even your friends. </li>
              <li>Wearing Masks offer some protection to you and are also meant to protect those around you, in case you are infected with the virus that causes COVID-19. </li>
              <li>Find ways to relax. Take deep breaths, stretch, or meditate. Try to do activities you enjoy, like exercising, gaming, reading or other hobbies</li>
              <li>Avoid alcohol and drugs as they can weaken your body’s ability to fight infections and increase the risk of certain complications.</li>
            </ul></p>
        </div>
      </div>
      <hr className="hr-1" />
      <div class="row featurette">
        <div class="col-md-6">
          <h2 class="featurette-heading">MIDDLE & OLD AGE<br></br> <span class="text1">It'll blow your mind.</span></h2>
          <p class="lead"><ul id="points">
              <li>Delay or cancel a visit if you or your visitors have symptoms of COVID-19 or have been exposed to someone with COVID-19 in the last 14 days</li>
              <li>Complete your care plan in consultation with your doctor, caregiver or home health aide.
A care plan can have benefits beyond the current pandemic.</li>
              <li>Fear and anxiety can be overwhelming and cause strong emotions.  Learn about stress and coping in these difficult times.</li>
              <li>Take breaks from the news. A constant stream of negative or frightening news can bring you down .Try to limit your news intake </li>
            </ul></p>
        </div>
        <div class="col-md-6">
          <img class="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" src="https://goodhearing.com/wp-content/uploads/2018/12/iStock-874800324.jpg" data-holder-rendered="true" />
        </div>
      </div>
      <hr className="hr-1" />
    </div>
  )
}

export default Content
