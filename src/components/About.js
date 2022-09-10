import banner1 from '../assets/cloris-ying-1Qt-W4BGrgc-unsplash.jpg';
import banner2 from '../assets/albert-YYZU0Lo1uXE-unsplash.jpg';
import banner3 from '../assets/jonas-allert-aISWW34SG88-unsplash.jpg';
import banner4 from '../assets/stories-8b8k6AsNY6c-unsplash.jpg';

const About = () => {
  const about = {
    paddingTop: "10%",
    overflowX: "hidden",
  }
    return (
        <>
        <div style={about}>
      <div className="container">

        <div className="row">
          <div className="col-lg-6 col-sm-6 col-md-6 col-12">

            <div className="row about--row--1">
              <div className="col-12 col-lg-6 col-sm-6 col-md-6 about--col--1">
                <img className="about--img" src={banner1} alt=''/>
              </div>
              <div className="col-12 col-lg-6 col-sm-6 col-md-6 about--col--2">
                <img className="about--img" src={banner2} alt=''/>
              </div>
            </div>

            <div className='row about--row--2'>
              <div className="col-12 col-lg-6 col-sm-6 col-md-6 about--col--3">
                <img className="about--img" src={banner3} alt=''/>
              </div>
              <div className="col-12 col-lg-6 col-sm-6 col-md-6 about--col--4">
                <img className="about--img" src={banner4} alt=''/>
              </div>
            </div>

          </div>

          <div className="col-lg-6 col-sm-6 col-md-6 col-12 about--col--5">
            <h5 className="section-title">About Us</h5>
            <h1 className="about--text--1">Welcome to HungryBites.</h1>
            <p className="about--text--2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>
            <p className="about--text--3">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>

            <div className="row about--row--3">
              <div className="col-sm-6 col-sm-6 col-md-6 col-12">
                <div className='about--div'>
                  <h1 className="">15+</h1>
                  <p className="">More<br/><span>BRANCHES</span></p>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-6 col-12">
                <div className='about--div'>
                  <h1 className="">50</h1>
                  <p className="">Popular<br/><span>MASTER CHEFS</span></p>
                </div>
              </div>
            </div>
            <button className="btn about--btn btn-warning">Read More</button>
          </div>

        </div>

      </div>
    </div>
        <div className="container-fluid bg-dark text-light footer pt-5 mt-5">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h4 className="section-title ff-secondary text-start fw-normal mb-4">Company</h4>
            <a className="btn btn-link" href="">About Us</a>
            <a className="btn btn-link" href="">Contact Us</a>
            <a className="btn btn-link" href="">Reservation</a>
            <a className="btn btn-link" href="">Privacy Policy</a>
            <a className="btn btn-link" href="">Terms & Condition</a>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="section-title ff-secondary text-start fw-normal mb-4">Contact</h4>
            <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
            <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
              <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
              <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="section-title ff-secondary text-start fw-normal mb-4">Opening</h4>
            <h5 className="text-light fw-normal">Monday - Saturday</h5>
            <p>09AM - 09PM</p>
            <h5 className="text-light fw-normal">Sunday</h5>
            <p>10AM - 08PM</p>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="section-title ff-secondary text-start fw-normal mb-4">Newsletter</h4>
            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <div className="position-relative mx-auto">
              <input className="form-control border-primary w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
              <button type="button" className="btn signup--btn btn-warning py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <a className="" href="#">Your Site Name</a>, All Right Reserved.
              
              
              Developed By <a className="text-warning" href="#">Mohamedsha.</a><br/><br/>
              Distributed By <a className="text-warning" href="#" target="_blank">Mohamedsha.</a>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-menu">
                <a href="">Home</a>
                <a href="">Cookies</a>
                <a href="">Help</a>
                <a href="">FQAs</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
    )
}
export default About;