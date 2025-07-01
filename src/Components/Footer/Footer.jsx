import React from 'react'

function Footer() {
  return (
    <>
    <footer className="footer-section text-white pt-5">
        <div className="container">
            <div className="row gy-4">
                <div className="col-lg-3 col-md-6">
                    <h4 className="mb-3">Company</h4>
                    <ul className="list-unstyled">
                        <li><a href="/About" className='footer-link'><i className="ri-arrow-right-s-line"></i>About Us</a></li>
                        <li><a href="#" className='footer-link'><i className="ri-arrow-right-s-line"></i>News</a></li>
                        <li><a href="#" className='footer-link'><i className="ri-arrow-right-s-line"></i>FAQ</a></li>
                        <li><a href="/Contact" className='footer-link'><i className="ri-arrow-right-s-line"></i>Contact Us</a></li>
                    </ul>
                </div>

                <div className="col-lg-3 col-md-6">
                    <h4 className="mb-3">Explore</h4>
                    <ul className="list-unstyled">
                        <li><a href="#" className='footer-link'><i className="ri-map-pin-line"></i>Tour Listings</a></li>
                        <li><a href="#" className='footer-link'><i className="ri-map-pin-line"></i>Destination</a></li>
                        <li><a href="#" className='footer-link'><i className="ri-question-line"></i>FAQ</a></li>
                    </ul>
                </div>

                <div className="col-lg-3 col-md-6">
                    <h4 className="mb-3">Quick Links</h4>
                    <ul className="list-unstyled">
                        <li><a href="/" className='footer-link'><i className="ri-home-4-line"></i>Home</a></li>
                        <li><a href="/About" className='footer-link'><i className="ri-information-line"></i>About Us</a></li>
                        <li><a href="/Contact" className='footer-link'><i className="ri-phone-line"></i>Contact Us</a></li>
                    </ul>
                </div>

                <div className="col-lg-3 col-md-6">
                    <h4 className="mb-3">Contact</h4>
                    <p className="small"><i className="ri-map-pin-line me-2"></i>78/A Floor Damle Tower</p>
                    <p className="small"><i className="ri-phone-line me-2"></i>+91 8855447755</p>
                    <p className="small"><i className="ri-mail-line me-2"></i>example@gmail.com</p>
                </div>

                <div className="footer-middel mt-5 px-0 py-0 mb-4 px-md-4 py-md-5">
                <div className="row align-items-center">
                    <div className="col-lg-8">
                        <h2 className="navbar-brand text-white fs-2 text-uppercase">Fly <span style={{color: '#f26f55'}}>BY</span></h2>
                        <p className="small mt-2 w-50">
                            Travel is a transformative and enriching experience that allows individuals to explore new destinations.
                        </p>
                        <div className="d-flex flex-wrap gap-3 mt-3">
                            <a href="#" className='footer-link'>Terms of Use</a>
                            <a href="#" className='footer-link'>Privacy & Cookies</a>
                            <a href="#" className='footer-link'>How the site works</a>
                        </div>
                    </div>

                    <div className="div-i col-lg-4 mt-4 mt-lg-0">
                        <h5 className="fw-bold mb-3">Subscribe to Our Newsletter</h5>
                        <form className="position-relative">
                            <input type="text" className="form-control" placeholder='Enter your email' />
                            <button type='submit' className='btn position-absolute top-0 end-0 mt-1 me-2'>
                                <i className="ri-send-plane-line"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer