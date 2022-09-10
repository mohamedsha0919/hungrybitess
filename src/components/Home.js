import bannerimage from '../assets/banner.jpg';
import banner1 from '../assets/cloris-ying-1Qt-W4BGrgc-unsplash.jpg';
import banner2 from '../assets/albert-YYZU0Lo1uXE-unsplash.jpg';
import banner3 from '../assets/jonas-allert-aISWW34SG88-unsplash.jpg';
import banner4 from '../assets/stories-8b8k6AsNY6c-unsplash.jpg';
import banner5 from '../assets/delivery (2).png';
import banner6 from '../assets/couples.jpg';
import team1 from '../assets/team-1.jpg';
import team2 from '../assets/team-2.jpg';
import team3 from '../assets/team-3.jpg';
import team4 from '../assets/team-4.jpg';
import testimg1 from '../assets/testimonial1.jpg';
import testimg2 from '../assets/testimonial2.jpg';
import testimg3 from '../assets/testimonial3.jpg';
import testimg4 from '../assets/testimonial4.jpg';
import testimg5 from '../assets/testimonial5.jpg';
import testimg6 from '../assets/testimonial6.jpg';
import gallery1 from '../assets/gallery-1.jpg';
import gallery2 from '../assets/gallery-2.jpg';
import gallery3 from '../assets/gallery-3.jpg';
import gallery4 from '../assets/gallery-4.jpg';
import gallery5 from '../assets/gallery-5.jpg';
import gallery6 from '../assets/gallery-6.jpg';
import gallery7 from '../assets/gallery-7.jpg';
import gallery8 from '../assets/gallery-8.jpg';
import gallery9 from '../assets/gallery-9.jpg';
import gallery10 from '../assets/gallery-10.jpg';
import gallery11 from '../assets/gallery-11.jpg';
import gallery12 from '../assets/gallery-12.jpg';


const Home = () => {

    return (
        <div>
        <section className="home">
          <div className='row'>
            <div className='col-12 col-sm-6 col-md-6 col-lg-6 banner--col--1'>
            <img src={ bannerimage } alt/>
            </div>
            <div className='col-12 col-sm-6 col-md-6 col-lg-6 banner--col--2'>
              <h1 className='banner--text'>You don't need a<br/> silver fork to eat good food.</h1>
              <p className='banner--text--1'>"All happiness depends on a leisurely breakfast."</p>
              <button className='btn banner--btn btn-warning'>Book a Table</button>
            </div>
          </div>
        </section>
    
    <section className="services" id="services">
      <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-3 col-md-3 col-12">
              <div className="service-item">
                  <i className="fa fa-3x fa-user-tie"></i>
                  <h5>Master Chefs</h5>
                  <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="service-item">
                  <i className="fa fa-3x fa-utensils"></i>
                  <h5>Quality Food</h5>
                  <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="service-item rounded">
                  <i className="fa fa-3x fa-cart-plus"></i>
                  <h5>Online Order</h5>
                  <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                </div>
              </div>
            <div className="col-lg-3 col-sm-6">
              <div className="service-item rounded">
                  <i className="fa fa-3x fa-headset"></i>
                  <h5>24/7 Service</h5>
                  <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                </div>
            </div>
        </div>
      </div>
    </section>

    <div id="about">
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

    <section id="Finished--projects">
      <div className="container">
        <div className="row finished--projects--row">
          <div className="col-md-3 col-sm-3 col-lg-3">
            <h5 className="">16</h5>
            <p className=''>Years of Experienced</p>
          </div>
          <div className="col-md-3 col-sm-3 col-lg-3">
            <h5 className="">18000</h5>
            <p className=''>Happy Customers</p>
          </div>
          <div className="col-md-3 col-sm-3 col-lg-3">
            <h5 className="">497</h5>
            <p className=''>Finished Projects</p>
          </div>
          <div className="col-md-3 col-sm-3 col-lg-3">
            <h5 className="">320</h5>
            <p className=''>Working Days</p>
          </div>
        </div>
      </div>
    </section>

    <section id="delivery">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-sm-6 col-12 delivery--col--1">
          <img src={banner5} className='delivery--man' alt='' />
        </div>
          <div className="col-md-6 col-lg-6 col-sm-6 col-12 delivery--col--2">
            <h1 className="delivery--text">Are you ready<br/> to order with the best deals?</h1>
            <div className="card">
              <div className="card-body">
              <nav>
                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <button class="nav-link  mb-3 text-dark" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true"><i class="fas fa-motorcycle me-2"></i><b>Delivery</b></button>
                  <button class="nav-link mb-3 text-dark" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false"><i class="fas fa-shopping-bag me-2"></i><b>Pickup</b></button></div>
                </nav>
                <div class="tab-content mt-3" id="nav-tabContent">
                  <div class="tab-pane active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                    <form class="row gx-2 gy-2 align-items-center">
                      <div class="col">
                        <div class="input-group-icon">
                          <i class="fas fa-map-marker-alt input-box-icon"></i>
                        <label class="visually-hidden" for="inputDelivery">Address</label>
                        <input class="form-control input-box form-hungrybites-control" id="inputDelivery" type="text" placeholder="Enter Your Address" /></div>
                      </div>
                      <div class="d-grid gap-3 col-sm-auto"><button class="btn btn-danger delivery-btn" type="submit">Find Food</button></div>
                    </form>
                  </div>
                  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                    <form class="row gx-4 gy-2 align-items-center">
                      <div class="col">
                        <div class="input-group-icon">
                          <i class="fas fa-map-marker-alt input-box-icon"></i>
                        <label class="visually-hidden" for="inputPickup">Address</label>
                        <input class="form-control input-box form-hungrybites-control" id="inputPickup" type="text" placeholder="Enter Your Address"/></div>
                      </div>
                      <div class="d-grid gap-3 col-sm-auto"><button class="btn btn-danger delivery-btn" type="submit">Find Food</button></div>
                    </form>
                  </div>
                </div>
             </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="container-fluid" id='reservation'>
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
    
    <section id='ourteams'>
      <div className="container">
          <h5 className="section-title team--text">Team Members</h5>
          <h1 className="team--text--1">Our Master Chefs</h1>

          <div class="row ourteam--row">
          <div class="col-lg-3 col-sm-3 col-md-3 col-md-6">
            <div class="team-item text-center rounded overflow-hidden">
              <div class="rounded-circle overflow-hidden m-4">
                <img class="img-fluid" src={team1} alt=""/>
              </div>
              <h5 class="mb-0">Full Name</h5>
              <small>Designation</small>
              <div class="d-flex justify-content-center mt-3">
                <a class="btn btn-square mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                <a class="btn btn-square mx-1" href=""><i class="fab fa-twitter"></i></a>
                <a class="btn btn-square mx-1" href=""><i class="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="team-item text-center rounded overflow-hidden">
              <div class="rounded-circle overflow-hidden m-4">
                <img class="img-fluid" src={team2} alt=""/>
              </div>
              <h5 class="mb-0">Full Name</h5>
              <small>Designation</small>
              <div class="d-flex justify-content-center mt-3">
                <a class="btn btn-square mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                <a class="btn btn-square mx-1" href=""><i class="fab fa-twitter"></i></a>
                <a class="btn btn-square mx-1" href=""><i class="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="team-item text-center rounded overflow-hidden">
              <div class="rounded-circle overflow-hidden m-4">
                <img class="img-fluid" src={team3} alt=""/>
              </div>
              <h5 class="mb-0">Full Name</h5>
              <small>Designation</small>
              <div class="d-flex justify-content-center mt-3">
                <a class="btn btn-square mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                <a class="btn btn-square mx-1" href=""><i class="fab fa-twitter"></i></a>
                <a class="btn btn-square mx-1" href=""><i class="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="team-item text-center rounded overflow-hidden">
              <div class="rounded-circle overflow-hidden m-4">
                <img class="img-fluid" src={team4} alt=""/>
              </div>
              <h5 class="mb-0">Full Name</h5>
              <small>Designation</small>
              <div class="d-flex justify-content-center mt-3">
                <a class="btn btn-square mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                <a class="btn btn-square mx-1" href=""><i class="fab fa-twitter"></i></a>
                <a class="btn btn-square mx-1" href=""><i class="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
    </div>
    </div>
    </section>
 
    <section id="testimonials">
      <h4 className="section-title testimonial--text">testimonials</h4>
      <h2 className="testimonial--text--1">Once you try it, you can't go back</h2>

      <div className="row testimonial--row">
        <div className="col-md-6 col-lg-6 col-sm-6 col-12">

          <div className="row testimonial--col--row">
            <div className="col-12 col-sm-6 col-lg-6 col-md-6 testimonial--col--1">
              <img src={testimg1} className='testimonial--img' alt=''/>
            <p className="testimonial--text--2">Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical.</p>
            </div>
            <div className="col-12 col-sm-6 col-lg-6 col-md-6 testimonial--col--2">
            <img src={testimg2} className='testimonial--img' alt=''/>
            <p className="testimonial--text--2">The AI algorithm is crazy good, it chooses the right meals for me every time. It's amazing not to worry about food anymore!</p>
            </div>
            
            <div className="col-12 col-sm-6 col-lg-6 col-md-6 testimonial--col--3">
            <img src={testimg3} className='testimonial--img' alt=''/>
            <p className="testimonial--text--2">Hungrybites is a life saver! I just started a company, so there's no time for cooking. I couldn't live without my daily meals now!</p>
            </div>
            <div className="col-12 col-sm-6 col-lg-6 col-md-6 testimonial--col--4">
            <img src={testimg4} className='testimonial--img' alt=''/>
            <p className="testimonial--text--2">I got Hungrybites for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic.</p>
            </div>

            <div className="col-12 col-sm-6 col-lg-6 col-md-6 testimonial--col--5"> 
            <img src={testimg5} className='testimonial--img' alt=''/>
              <p className="testimonial--text--2">Hungrybites for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic.</p>
            </div>
            <div className="col-12 col-sm-6 col-lg-6 col-md-6 testimonial--col--6">
            <img src={testimg6} className='testimonial--img' alt=''/>
              <p className="testimonial--text--2">I got Hungrybites for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic.</p>
            </div>

          </div>
        </div>
        
        <div className="col-md-6 col-lg-6 col-sm-6 col-12">
          <div className="gallery">
            <figure className="gallery-item">
              <img
              src={gallery1}
              alt="Photo of beautifully
              arranged food"
              />
            </figure>
            <figure className="gallery-item">
              <img
              src={gallery2}
              alt="Photo of beautifully
              arranged food"
              />
            </figure>
            <figure className="gallery-item">
              <img
              src={gallery3}
              alt="Photo of beautifully
              arranged food"
              />
            </figure>
            <figure className="gallery-item">
              <img
              src={gallery4}
              alt="Photo of beautifully
              arranged food"
              />
            </figure>
            <figure className="gallery-item">
              <img
              src={gallery5}
              alt="Photo of beautifully
              arranged food"
              />
            </figure>
            <figure className="gallery-item">
              <img
              src={gallery6}
              alt="Photo of beautifully
              arranged food"
              />
            </figure>
            <figure className="gallery-item">
              <img
              src={gallery7}
              alt="Photo of beautifully
              arranged food"
              />
            </figure>
            <figure className="gallery-item">
              <img
              src={gallery8}
              alt="Photo of beautifully
              arranged food"
              />
            </figure>
            <figure className="gallery-item">
              <img
              src={gallery9}
              alt="Photo of beautifully
              arranged food"
              />
            </figure>
            <figure className="gallery-item">
              <img
              src={gallery10}
              alt="Photo of beautifully
              arranged food"
              />
            </figure>
            <figure className="gallery-item">
              <img
              src={gallery11}
              alt="Photo of beautifully
              arranged food"
              />
            </figure>
            <figure className="gallery-item">
              <img
              src={gallery12}
              alt="Photo of beautifully
              arranged food"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
    
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
    </div>
    )
}
export default Home;