import React from 'react';
import './HomePage.css'; // Import your CSS file
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container">
      <nav className="navbar">
        <h1>Dream Escape</h1>
        {/* Navbar links */}
        <ul className="nav-links">
          <li><a href="/">Flights</a></li>
          <li><a href="/about">Hotels</a></li>
          <li><a href="/services">Trains</a></li>
          <li><a href="/contact">Cars</a></li>
          <li><a href="/deals">Deals</a></li>
          <li><a href="/about">About</a></li>
        </ul>
        <Link to='/Login'>

        <button className="signup-button">Login</button> 
        </Link>
      </nav>
      
      <div className="grid-container">
        <div className="grid-item"><img src="https://img.traveltriangle.com/attachments/pictures/886204/original/shutterstock_667548661_687x478.jpg" alt="1" /></div>
        <div className="grid-item"><img src="https://soultravelindia.com/wp-content/uploads/2020/10/How-to-plan-your-trip-to-India-cover.jpeg" alt="2" /></div>
        <div className="grid-item"><img src="https://gumlet.assettype.com/freepressjournal/2023-02/cd67e896-19af-4907-85bf-6673112badf3/c063433e186b141837b859ed329b59d0.jpg" alt="3" /></div>
        <div className="grid-item"><img src="https://img.veenaworld.com/group-tours/world/america/amep/amep-thb.jpg" alt="4" /></div>
        <div className="grid-item"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnN6Vs-_8BbNSMqQBFhiRDjYpXaf4MviOVslled5I3BosqFl1Pfkdjug8C-a7HWHM5mgM&usqp=CAU" alt="5" /></div>
        <div className="grid-item"><img src="https://www.goway.com/media/cache/2f/55/2f557586ad9e887f68de2096c6f1b1ea.jpg" alt="6" /></div>
      </div>
      
      <div className="plan">
      <h2>Plan Your Dream Escape</h2>
      </div>

      <div className="content">
        <div className="form-wrapper">
          <div className="image-wrapper">
            <img src="https://www.progressive.com/lifelanes/wp-content/uploads/2023/01/PR1497_FamilyRoadTrip_Banner.jpg" alt="Destination" />
          </div>
          <div className="form-container">
            <form className="form">
            <label htmlFor="destination">Destination:</label>
          <input type="text" id="destination" name="destination" />

          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" />

          <label htmlFor="members">Number of Members:</label>
          <input type="number" id="members" name="members" />

          <button type="submit" className="submit-button">Plan Now</button>
            </form>
          </div>
        </div>
      </div>
      
      <footer className="footer">
        <div className="contact">
          <h3>Contact Us</h3>
          <p>Email: dreamescape@gmail.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
           
      </footer>
    </div>
  );
};

export default HomePage;