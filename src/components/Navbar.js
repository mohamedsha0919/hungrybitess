import { Outlet, NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        <>
    <section className="fixed-top">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <NavLink to='' className='navbar-brand'>Hungry<span className="navbar-brand-1">Bites</span></NavLink>
        <div className="">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to='' className='nav-link'>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/Services' className='nav-link'>Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/About' className='nav-link'>About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/Menu' className='nav-link'>Menu</NavLink>
              </li>
              <li className="nav-item">
              <div className="dropdown">
                <div to='' className='nav-link Blogs'>Blogs
                <div className="dropdown-content">
                <NavLink to='/Testimonials' className='nav-link'>Testimonials</NavLink>
                <NavLink to='/Gallery' className='nav-link'>Gallery</NavLink>
                <NavLink to='/Ourteam' className='nav-link'>Our Team</NavLink>
                </div>
                </div>
              </div>
              </li>
              <li className="nav-item">
                <NavLink to='/Contacts' className='nav-link'>Contacts</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
        <Outlet/>
        </>
        
    )
}
export default Navbar;