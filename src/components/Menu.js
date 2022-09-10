import menu1 from '../assets/menu-1.jpg';
import menu2 from '../assets/menu-2.jpg';
import menu3 from '../assets/menu-3.jpg';
import menu4 from '../assets/menu-4.jpg';
import menu5 from '../assets/menu-5.jpg';
import menu6 from '../assets/menu-6.jpg';
import menu7 from '../assets/menu-7.jpg';
import menu8 from '../assets/menu-8.jpg';

const Menu = (props) => {
  const menu = {
    paddingTop: "6%",
    overflowX: "hidden",
  }
    return (
        <>
        <div className="container-xxl py-5">
      <div className="container" style={menu}>
        <div className="text-center">
          <h5 className="section-title ff-secondary text-center fw-normal">Food Menu</h5>
          <h1 className="mb-5">Most Popular Items</h1>
        </div>
        <div className="tab-class text-center">
          <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
            <li className="nav-item">
              <a className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active text-decoration-none menutext" data-bs-toggle="pill" href="#tab-1">
                <i className="fa fa-coffee fa-2x text-primary"></i>
                <div className="ps-3">
                  <small className="text-muted small-text">Popular</small>
                  <h6 className="mt-n1 mb-0 text-dark">Breakfast</h6>
                </div>
              </a>
            </li>
            <li className="nav-item">
              <a className="d-flex align-items-center text-start mx-3 pb-3 text-decoration-none menutext" data-bs-toggle="pill" href="#tab-2">
                <i className="fa fa-hamburger fa-2x text-primary"></i>
                <div className="ps-3">
                  <small className="text-muted small-text">Special</small>
                  <h6 className="mt-n1 mb-0 text-dark">Launch</h6>
                </div>
              </a>
            </li>
            <li className="nav-item">
              <a className="d-flex align-items-center text-start mx-3 me-0 pb-3 text-decoration-none menutext" data-bs-toggle="pill" href="#tab-3">
                <i className="fa fa-utensils fa-2x text-primary"></i>
                <div className="ps-3">
                  <small className="text-muted small-text">Lovely</small>
                  <h6 className="mt-n1 mb-0 text-dark">Dinner</h6>
                </div>
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div id="tab-1" className="tab-pane fade show p-0 active">
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="d-flex align-items-center">
                    <img className="flex-shrink-0 img-fluid rounded price--img" src={menu1} alt=""/>
                    <div className="w-100 d-flex flex-column text-start ps-4">
                      <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span>Chicken Burger</span>
                      <span className="text-primary">{props.chickenburger}</span>
                      </h5>
                      <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex align-items-center">
                    <img className="flex-shrink-0 img-fluid rounded price--img" src={menu2} alt=""/>
                    <div className="w-100 d-flex flex-column text-start ps-4">
                      <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span>Chicken Burger</span>
                      <span className="text-primary">{props.chickenburger}</span>
                      </h5>
                      <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex align-items-center">
                    <img className="flex-shrink-0 img-fluid rounded price--img" src={menu3} alt=""/>
                    <div className="w-100 d-flex flex-column text-start ps-4">
                      <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span>Chicken Burger</span>
                      <span className="text-primary">{props.chickenburger}</span>
                      </h5>
                      <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex align-items-center">
                    <img className="flex-shrink-0 img-fluid rounded price--img" src={menu4} alt=""/>
                    <div className="w-100 d-flex flex-column text-start ps-4">
                      <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span>Chicken Burger</span>
                      <span className="text-primary">{props.chickenburger}</span>
                      </h5>
                      <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex align-items-center">
                    <img className="flex-shrink-0 img-fluid rounded price--img" src={menu5} alt=""/>
                    <div className="w-100 d-flex flex-column text-start ps-4">
                      <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span>Chicken Burger</span>
                      <span className="text-primary">{props.chickenburger}</span>
                      </h5>
                      <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex align-items-center">
                    <img className="flex-shrink-0 img-fluid rounded price--img" src={menu6} alt=""/>
                    <div className="w-100 d-flex flex-column text-start ps-4">
                      <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span>Chicken Burger</span>
                      <span className="text-primary">{props.chickenburger}</span>
                      </h5>
                      <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex align-items-center">
                    <img className="flex-shrink-0 img-fluid rounded price--img" src={menu7} alt=""/>
                    <div className="w-100 d-flex flex-column text-start ps-4">
                      <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span>Chicken Burger</span>
                      <span className="text-primary">{props.chickenburger}</span>
                      </h5>
                      <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex align-items-center">
                    <img className="flex-shrink-0 img-fluid rounded price--img" src={menu8} alt=""/>
                    <div className="w-100 d-flex flex-column text-start ps-4">
                      <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span>Chicken Burger</span>
                      <span className="text-primary">{props.chickenburger}</span>
                      </h5>
                      <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="tab-2" className="tab-pane fade show p-0">
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="d-flex align-items-center">
                    <img className="flex-shrink-0 img-fluid rounded price--img" src={menu1} alt=""/>
                    <div className="w-100 d-flex flex-column text-start ps-4">
                      <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span>Chicken Burger</span>
                      <span className="text-primary">{props.chickenburger}</span>
                      </h5>
                      <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex align-items-center">
                    <img className="flex-shrink-0 img-fluid rounded price--img" src={menu2} alt=""/>
                    <div className="w-100 d-flex flex-column text-start ps-4">
                      <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span>Chicken Burger</span>
                      <span className="text-primary">{props.chickenburger}</span>
                      </h5>
                      <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex align-items-center">
                    <img className="flex-shrink-0 img-fluid rounded price--img" src={menu3} alt=""/>
                    <div className="w-100 d-flex flex-column text-start ps-4">
                      <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span>Chicken Burger</span>
                      <span className="text-primary">{props.chickenburger}</span>
                      </h5>
                      <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex align-items-center">
                    <img className="flex-shrink-0 img-fluid rounded price--img" src={menu4} alt=""/>
                    <div className="w-100 d-flex flex-column text-start ps-4">
                      <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span>Chicken Burger</span>
                      <span className="text-primary">{props.chickenburger}</span>
                      </h5>
                      <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex align-items-center">
                    <img className="flex-shrink-0 img-fluid rounded price--img" src={menu5} alt=""/>
                    <div className="w-100 d-flex flex-column text-start ps-4">
                      <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span>Chicken Burger</span>
                      <span className="text-primary">{props.chickenburger}</span>
                      </h5>
                      <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex align-items-center">
                    <img className="flex-shrink-0 img-fluid rounded price--img" src={menu6} alt=""/>
                    <div className="w-100 d-flex flex-column text-start ps-4">
                      <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span>Chicken Burger</span>
                      <span className="text-primary">{props.chickenburger}</span>
                      </h5>
                      <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex align-items-center">
                    <img className="flex-shrink-0 img-fluid rounded price--img" src={menu7} alt=""/>
                    <div className="w-100 d-flex flex-column text-start ps-4">
                      <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span>Chicken Burger</span>
                      <span className="text-primary">{props.chickenburger}</span>
                      </h5>
                      <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex align-items-center">
                    <img className="flex-shrink-0 img-fluid rounded price--img" src={menu8} alt=""/>
                    <div className="w-100 d-flex flex-column text-start ps-4">
                      <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span>Chicken Burger</span>
                      <span className="text-primary">{props.chickenburger}</span>
                      </h5>
                      <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="tab-3" className="tab-pane fade show p-0">
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="d-flex align-items-center">
                    <img className="flex-shrink-0 img-fluid rounded price--img" src={menu1} alt=""/>
                    <div className="w-100 d-flex flex-column text-start ps-4">
                      <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span>Chicken Burger</span>
                      <span className="text-primary">{props.chickenburger}</span>
                      </h5>
                      <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex align-items-center">
                    <img className="flex-shrink-0 img-fluid rounded price--img" src={menu2} alt=""/>
                    <div className="w-100 d-flex flex-column text-start ps-4">
                      <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span>Chicken Burger</span>
                      <span className="text-primary">{props.chickenburger}</span>
                      </h5>
                      <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex align-items-center">
                    <img className="flex-shrink-0 img-fluid rounded price--img" src={menu3} alt=""/>
                    <div className="w-100 d-flex flex-column text-start ps-4">
                      <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span>Chicken Burger</span>
                      <span className="text-primary">{props.chickenburger}</span>
                      </h5>
                      <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex align-items-center">
                    <img className="flex-shrink-0 img-fluid rounded price--img" src={menu4} alt=""/>
                    <div className="w-100 d-flex flex-column text-start ps-4">
                      <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span>Chicken Burger</span>
                      <span className="text-primary">{props.chickenburger}</span>
                      </h5>
                      <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex align-items-center">
                    <img className="flex-shrink-0 img-fluid rounded price--img" src={menu5} alt=""/>
                    <div className="w-100 d-flex flex-column text-start ps-4">
                      <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span>Chicken Burger</span>
                      <span className="text-primary">{props.chickenburger}</span>
                      </h5>
                      <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex align-items-center">
                    <img className="flex-shrink-0 img-fluid rounded price--img" src={menu6} alt=""/>
                    <div className="w-100 d-flex flex-column text-start ps-4">
                      <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span>Chicken Burger</span>
                      <span className="text-primary">{props.chickenburger}</span>
                      </h5>
                      <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex align-items-center">
                    <img className="flex-shrink-0 img-fluid rounded price--img" src={menu7} alt=""/>
                    <div className="w-100 d-flex flex-column text-start ps-4">
                      <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span>Chicken Burger</span>
                      <span className="text-primary">{props.chickenburger}</span>
                      </h5>
                      <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex align-items-center">
                    <img className="flex-shrink-0 img-fluid rounded price--img" src={menu8} alt=""/>
                    <div className="w-100 d-flex flex-column text-start ps-4">
                      <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span>Chicken Burger</span>
                      <span className="text-primary">{props.chickenburger}</span>
                      </h5>
                      <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

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
export default Menu;