import testimg1 from '../assets/testimonial1.jpg';
import testimg2 from '../assets/testimonial2.jpg';
import testimg3 from '../assets/testimonial3.jpg';
import testimg4 from '../assets/testimonial4.jpg';
import testimg5 from '../assets/testimonial5.jpg';
import testimg6 from '../assets/testimonial6.jpg';

const Testimonials = () => {
  const Testimonials = {
    position: "relative",
    marginTop: "9%",
    overflowX: "hidden"
  };
  const TestimonalsRow = {
    paddingTop: "40px",
    justifyContent: "center",
    textAlign: "center"
  };
  // const TestimonialImage = {
  //   width: "100px",
  //   padding: "0px",
  //   borderRadius: "50%"
  // };
    return (
      <>
       <section style={Testimonials}>
      <h4 className="section-title testimonial--text">testimonials</h4>
      <h2 className="testimonial--text--1">Once you try it, you can't go back</h2>

          <div className="row testimonial--row" style={TestimonalsRow}>
            <div className="col-12 col-sm-4 col-lg-4 col-md-4 testimonial--col--1">
              <img src={testimg1} className='testimonial--img' alt='testimonial'/>
              <p className="">Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical.</p>
            </div>
            <div className="col-12 col-sm-4 col-lg-4 col-md-4 testimonial--col--2">
              <img src={testimg2} className='testimonial--img' alt='testimonial'/>
              <p className="">The AI algorithm is crazy good, it chooses the right meals for me every time. It's amazing not to worry about food anymore!</p>
            </div>
          </div>
          <div className="row" style={TestimonalsRow}>
            <div className="col-12 col-sm-4 col-lg-4 col-md-4 testimonial--col--3">
              <img src={testimg3} className='testimonial--img' alt='testimonial'/>
              <p className="">Hungrybites is a life saver! I just started a company, so there's no time for cooking. I couldn't live without my daily meals now!</p>
            </div>
            <div className="col-12 col-sm-4 col-lg-4 col-md-4 testimonial--col--4">
              <img src={testimg4} className='testimonial--img' alt='testimonial'/>
              <p className="">I got Hungrybites for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic.</p>
            </div>
          </div>
          <div className='row' style={TestimonalsRow}>
            <div className="col-12 col-sm-4 col-lg-4 col-md-4 testimonial--col--5"> 
              <img src={testimg5} className='testimonial--img' alt='testimonial'/>
              <p className="">Hungrybites for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic.</p>
            </div>
            <div className="col-12 col-sm-4 col-lg-4 col-md-4 testimonial--col--6">
              <img src={testimg6} className='testimonial--img' alt='testimonial'/>
              <p className="">I got Hungrybites for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic.</p>
            </div>
          </div>
        </section>
        
 

        <div className="container-fluid bg-dark text-light footer pt-5 mt-5">
<div className="container py-5">
  <div className="row g-5">
    <div className="col-lg-3 col-md-6">
      <h4 className="section-title ff-secondary text-start fw-normal mb-4">Company</h4>
      <a className="btn btn-link" href="/#">About Us</a>
      <a className="btn btn-link" href="/#">Contact Us</a>
      <a className="btn btn-link" href="/#">Reservation</a>
      <a className="btn btn-link" href="/#">Privacy Policy</a>
      <a className="btn btn-link" href="/#">Terms & Condition</a>
    </div>
    <div className="col-lg-3 col-md-6">
      <h4 className="section-title ff-secondary text-start fw-normal mb-4">Contact</h4>
      <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
      <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
      <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
      <div className="d-flex pt-2">
        <a className="btn btn-outline-light btn-social" href="/#"><i className="fab fa-twitter"></i></a>
        <a className="btn btn-outline-light btn-social" href="/#"><i className="fab fa-facebook-f"></i></a>
        <a className="btn btn-outline-light btn-social" href="/#"><i className="fab fa-youtube"></i></a>
        <a className="btn btn-outline-light btn-social" href="/#"><i className="fab fa-linkedin-in"></i></a>
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
        &copy; <a className="" href="/#">Your Site Name</a>, All Right Reserved.
        
        
        Developed By <a className="text-warning" href="/#">Mohamedsha.</a><br/><br/>
        Distributed By <a className="text-warning" href="/#" target="_blank">Mohamedsha.</a>
      </div>
      <div className="col-md-6 text-center text-md-end">
        <div className="footer-menu">
          <a href="/#">Home</a>
          <a href="/#">Cookies</a>
          <a href="/#">Help</a>
          <a href="/#">FQAs</a>
        </div>
      </div>
    </div>
  </div>
</div>
</div>


</>
    )
}
export default Testimonials;

