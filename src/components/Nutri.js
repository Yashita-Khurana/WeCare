import React from 'react'
import './Nutri.css'
function Nutri() {
  return (
    <div>
      <h1 id="veranda"><span id="diet">DIET</span> <span id="plans">PLANS</span></h1>
      <h3 id="veranda2">According to Age groups</h3>
      <div class="blog-card">
        <div class="meta">
          <div class="photo1" ></div>
          <ul class="details">
            <li class="author"><a href="#">Children</a></li>
            <li class="date">(0-13)</li>
            <li class="tags">
              <ul>
                <li><a href="#">Nutrition Plan (during covid)</a></li>

              </ul>
            </li>
          </ul>
        </div>
        <div class="description">
          <h1>Children (0-13 yrs)</h1>
          <h2>Don't Eat Less, Eat Right</h2>
          <ul>
            <li>For fruit, toddlers between 2 and 3 years old need about 1 cup of fruit per day. Children between 4 and 13 need 1.5 cups of fruit per day. Girls between 14 and 18 need 1.5 cups of fruit per day, and boys that age need 2 cups.</li>
            <li>
            Make sure your child has 8–10 cups of water every day. This includes water from all sources like other drinks and food.
            </li>
            <li>Make sure your child eats unsaturated fats (found in fish, avocado, nuts, olive oil, soy, canola, sunflower and corn oils) rather than saturated fats (found in fatty meat, butter, coconut oil, cream, cheese, ghee and lard).</li>
            <li>
            When cooking and preparing food for your child, limit the amount of salt and high-sodium condiments (e.g. soy sauce and fish sauce).
            </li>

          </ul>

        </div>
      </div>
      <div class="blog-card alt">
        <div class="meta">
          <div class="photo2"></div>
          <ul class="details">
            <li class="author"><a href="#">Teenage and Adults</a></li>
            <li class="date">(14-35)</li>
            <li class="tags">
              <ul>
                <li><a href="#">Nutrition Plan (during covid)</a></li>

              </ul>
            </li>
          </ul>
        </div>
        <div class="description">
        <h1>Teens and Adults (14-35 yrs)</h1>
          <h2>Don't Stress and Binge-eat</h2>
          <ul>
            <li>Get your dose of calcium with dairy- Dairy products such as milk, curd, paneer, and others are rich sources of calcium and should be a regular part of a teenager's diet.</li>
            <li>
            Proteins are very vital and Rich sources of protein include fish, lean meats, and eggs. Vegetarian sources include legumes, beans, lentils, and soy.
            </li>
            <li>Iron is an important nutrient, especially for boosting immunity. Include iron-rich foods such as leafy green vegetables in a teenager's diet to keep them safe from diseases.</li>
            <li>
            Vitamin C and vitamin D are being touted as the heroes against the novel coronavirus infection. Both nutrients are known to boost immunity and improve the disease-fighting capabilities of the body.
            </li>

          </ul>
        </div>
      </div>
      <div class="blog-card">
        <div class="meta">
          <div class="photo3" ></div>
          <ul class="details">
            <li class="author"><a href="#">Middle and OldAge</a></li>
            <li class="date">(36-65+)</li>
            <li class="tags">
              <ul>
                <li><a href="#">Nutrition Plan (during covid)</a></li>

              </ul>
            </li>
          </ul>
        </div>
        <div class="description">
        <h1>Middle and OldAge (36-65+ yrs)</h1>
          <h2>Make sure what food goes inside the body</h2>
          <ul>
            <li>Avoid industrially produced trans fats. These are often found in processed food, fast food, snack food, fried food, frozen pizza, pies, cookies, margarines and spreads.Eat less salt and sugar</li>
            <li>
            When cooking and preparing food, limit the amount of salt and high-sodium condimentsLimit your daily salt intake to approx 1 teaspoon, and use iodized salt.
            </li>
            <li>Eat at home to reduce your rate of contact with other people . We recommend maintaining social distancing. That is not always possible in crowded social settings like restaurants and cafes.</li>
            <li>
            Choose white meat (e.g. poultry) and fish, which are generally low in fat, rather than red meat.Avoid processed meats because they are high in fat and salt.
            </li>

          </ul>

        </div>
      </div>
      <h1 id="veranda2"><span id="diet">IMMUNITY</span> <span id="plans">BOOSTERS</span></h1>
      <img id="dietimg"src="https://s3-us-west-2.amazonaws.com/utsw-patientcare-web-production/original_images/immune_boosting_foods_1080_x_1080-01.jpg" alt=""/>
    </div>
  )
}

export default Nutri
