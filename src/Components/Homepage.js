import React from "react";
import Navbar from "./Navbar";
import pan from "../asserts/pan.png";
import beg from "../asserts/beg.jpg";import am from "../asserts/am.jpeg";import sr from "../asserts/sr.jpg";
import el from "../asserts/el.jpg"; import cl from "../asserts/cl.avif"; import pe from "../asserts/pe.jpg";
import wr from "../asserts/wr.jpg";
import "./Homepage.css";

function Homepage() {
  return (
    <div className="home">
      <Navbar />
      <Introduction />
      <About />
      <Services/>
      <ContactUs />
      <FooterBar />
    </div>
  );
}

function Introduction() {
  return (
    <div className="banner" id="home">
      <div class="search-container">
  <input type="text" class="search-input" placeholder="Search for products, brands and more..." />
  <button class="search-button">Search</button>
</div>
<div className="hyd">

</div>
<div className="hyda">
  
</div>
    </div>
  );
}

function About() {
  return (
    <div className="cards" id="about">
  <div className="card-location">
    <h1 className="card-text1">Location HYDERABAD</h1>
    <div className="card-container">
      <div className="card">
        <img src={sr} alt="Location Image" />
        <div className="card-info">
          <h3>Location: Sr Nagar</h3>
          <h3>Hostel List</h3>
          <a href="#learmore" className="learn-more">Learn More <span>&#8594;</span></a>
        </div>
      </div>

      <div className="card">
        <img src={am}alt="Location Image" />
        <div className="card-info">
          <h3>Location:Ameerpet</h3>
          <h3>Hostel List</h3>
          <a href="#" className="learn-more">Learn More <span>&#8594;</span></a>
        </div>
      </div>

      <div className="card" >
        <img src={beg} alt="Location Image" />
        <div className="card-info">
          <h3>Location: Begumpet</h3>
          <h3>Hostel List</h3>
          <a href="#" className="learn-more">Learn More <span>&#8594;</span></a>
        </div>
      </div>

      <div className="card">
        <img src={pan} alt="Location Image" />
        <div className="card-info">
          <h3>Location: Panjagutta</h3>
          <h3>Hostel List</h3>
          <a href="#" className="learn-more1">Learn More <span>&#8594;</span></a>
        </div>
      </div>
      
    </div>
    <div className="learn-more">
        <button className="read">Read More</button>
        </div>
  </div>
 
</div>


      
  );
}

function Services() {
  return (
    <div className="services-section" id="services">
      <div className="services-header">
        <h1>Future Services</h1>
      </div>
      <div className="services-content">
        <div className="service-cards">
          <div className="service-card">
            <h3>Elctrition</h3>
            <img src={el} alt="Service 1" />
          </div>
          <div className="service-card">
            <h3>Cleaning</h3>
            <img src={cl} alt="Service 2" />
          </div>
          <div className="service-card">
            <h3>Painting</h3>
            <img src={pe} alt="Service 3" />
          </div>
          <div className="service-card">
            <h3>Painting</h3>
            <img src={wr} alt="Service 3" />
          </div>
        </div>
      </div>
    </div>
  );
}


// Contact-us

const ContactUs = () => {
  return (
    <div className="mycontact" id="contact">
    <form action="#" method="post">
      <h1>Contact Us</h1>
      <p>Please take a moment to get in touch, we will get back to you shortly.</p>

      <div className="column">
        <label htmlFor="the-name">Your Name</label>
        <input type="text" name="name" id="the-name" />

        <label htmlFor="the-email">Email Address</label>
        <input type="email" name="email" id="the-email" />

        <label htmlFor="the-phone">Phone Number</label>
        <input type="tel" name="phone" id="the-phone" />

        <label htmlFor="the-reason">How can we help you?</label>
        <select name="reason" id="the-reason">
          <option value="">Choose one</option>
          <option value="web">I need web design services</option>
          <option value="video">I need you to produce a video</option>
          <option value="3d">I need 3D polygon things</option>
        </select>
      </div>

      <div className="column">
        <label htmlFor="the-message">Message</label>
        <textarea name="message" id="the-message"></textarea>

        <label>
          <input type="checkbox" name="newsletter" value="yes" /> Join our mailing list?
        </label>
        <input type="submit" value="Send Message" />
      </div>
    </form>
    </div>
  );
};



// footer

const FooterBar = () => {
  return (
    <footer>
  <div class="footer-container">
    <div class="footer-section about">
      <h3>About Us</h3>
      <p>We are committed to delivering the best service and customer satisfaction.</p>
    </div>
    <div class="footer-section links">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </div>
    <div class="footer-section contact">
      <h3>Contact Us</h3>
      <p>Email: contact@company.com</p>
      <p>Phone: +91 1234567890</p>
    </div>
    <div class="footer-section social">
      <h3>Follow Us</h3>
      <a href="#"><i class="fab fa-facebook-f"></i></a>
      <a href="#"><i class="fab fa-twitter"></i></a>
      <a href="#"><i class="fab fa-linkedin-in"></i></a>
    </div>
  </div>
  <div class="footer-bottom">
    <p>&copy; 2024 Company Name. All rights reserved.</p>
  </div>
</footer>

  );
};

export default Homepage;
