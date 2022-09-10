import banner6 from '../assets/couples.jpg';

const Contacts = () => {
  const Contacts = {
    paddingTop: "8%",
    overflowX: "hidden"
  }
    return (
      <>
        <div className="container-fluid" style={Contacts}>
      <div className="row reservation-row">
        <div className="col-md-6 col-lg-6 col-sm-6 col-12">
          <div className="reservation-section">
            <h5 className="section-title">Reservation</h5>
            <h3 className="reservation--text">Book A Table Online</h3>
            <form method="POST">
              <div className="row reservation--row--1">
                <div className="col-md-6 col-lg-6 col-sm-6 col-12">
                  <div className="form-floating">
                    <input type="text" className="form-control" id="name" placeholder="Your Name" required/>
                    <label for="name">Your Name</label>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-sm-6 col-12">
                  <div className="form-floating">
                    <input type="email" className="form-control" id="email" placeholder="Your Email" required/>
                    <label for="email">Your Email</label>
                  </div>
                </div>
              </div>
              <div className='row reservation--row--2'>
                <div className="col-md-6 col-lg-6 col-sm-6 col-12">
                  <div className="form-floating" id="date3" data-target-input="nearest">
                    <input type="text" className="form-control datetimepicker-input name" id="datetime" placeholder="Date & Time" data-target="#date3" data-toggle="datetimepicker" required />
                    <label for="datetime">Date & Time</label>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-sm-6 col-12">
                  <div className="form-floating">
                    <select className="form-select" id="select1" required>
                      <option value="1">People 1</option>
                      <option value="2">People 2</option>
                      <option value="3">People 3</option>
                      <option value="4">People 4</option>
                    </select>
                    <label for="select1">No Of People</label>
                  </div>
                </div>
                <div className="col-md-12 col-lg-12 col-sm-12 col-12 textarea--col">
                  <div className="form-floating">
                    <textarea className="form-control" placeholder="Special Request" id="message"></textarea>
                    <label for="message">Special Request</label>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-sm-6 col-12">
                  <button className="btn reservation-btn btn-warning" type="submit" >Book Now</button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="col-md-6 col-lg-6 col-sm-6 col-12">
            <img className='reservation--img' src={banner6} alt=''/>
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
export default Contacts;