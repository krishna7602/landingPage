import './App.css';
import photo from './photo1.png';
import logo from './logo-removebg-preview.png'
import about from './aboutUs.png'
import service from './services.png'
import service1 from './service1.jpg';
import service2 from './service2.jpg';
import service3 from './service3.jpg';

function App() {
  return (
    <>
      <div className="conatiner1">
      <img src={logo} alt=""  className="logo"/>
      <div className="logodescription">Aura Interiors</div>
      <button type="button" class="btn  btn-outline-info btn1">Register Now</button>
      <img src={photo} alt="" id="photo1" />
      <h1 className="slogan">Unique housing <br />  solutions for you</h1>
      <div className="description">Whether you’re buying, listing, or renting,<br />we can be of assistance to you.</div>
      </div>
      <div className="d-flex container">
        <div className="photodiv" ><img src={about} alt="" className="aboutphoto container" /></div>
        <div className="aboutUsPara container"><h2>About Us</h2> <br />Founded in 1975, Aura Interiors is a full-service realty company, <br />assisting homeowners from selection to financing, all the way to the purchase of their homes. <br />All properties feature world-class standards and affordable property rates designed to fit every lifestyle.</div>
      </div>
      <div className="btn2"><button type="button" class="btn btn-outline-primary">Get In Touch</button></div>
      <h2 className="servicesHeading">Services & Strategies</h2>
      <div className="container1 d-flex">
        <img src={service} alt="" className="services container1"/>
        <div className="newcard">
        <div className="card card1">
            <img src={service1} className="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Residential Listings</h5>
              <p class="card-text">Over 150,000 available homes for every budget.</p>
            </div>
          </div>
        </div>
        <div className="newcard">
        <div className="card card2">
            <img src={service3} className="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Sales and Leasing</h5>
              <p class="card-text">One-on-one assistance from search to purchase.</p>
            </div>
          </div>
        </div>
        <div className="newcard">
        <div className="card card3">
            <img src={service2} className="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Property Management</h5>
              <p class="card-text">Consultancy for clients with multiple properties..</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h4 className="experience">Get the best property investment options with the help of our highly experienced group of real estate brokers. </h4>
      </div>
    </>
  );
}

export default App;
