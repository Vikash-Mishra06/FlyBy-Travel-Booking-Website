import React from 'react'
import aboutbanner from '../../assets/about-banner-three.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import brand1 from '../../assets/brand-1.jpeg';
import brand2 from '../../assets/brand-2.jpeg';
import brand3 from '../../assets/brand-3.jpeg';
import brand4 from '../../assets/brand-4.png';
import brand5 from '../../assets/brand-5.png';

function About() {
  return (
    <>
      <div className="about-section section">
        <div className="about-section section">
          <div className="container about">
            <div className="row align-items-center">
              {/* Left Column: Text Content */}
              <div className="col-lg-6">
                <div className="section-title">
                  <p>Special Offers</p>
                  <h2>Get the Best Travel Experience <br /> with FlyBY</h2>
                </div>

                <p className="about-pera">
                  Travel opens your mind, introduces you to new cultures, sparks adventure,
                  builds memories, and teaches lessons no classroom ever could.
                </p>
                <p className="about-pera">
                  Travel allows you to explore breathtaking places, meet diverse people, embrace new experiences.
                </p>
                <button className="btn mt-4">
                  Learn More <i className="ri-arrow-right-up-line"></i>
                </button>
                <div className="user-icon d-flex align-items-center gap-3 mt-4">
                  <i className="ri-user-line me-2"></i>
                  <p className="about-pera m-0"> 2500 people booked Tomorrowland Event in the last 24 hours</p>
                </div>


              </div>

              {/* Right Column: Image and Stats */}
              <div className="col-lg-6 mt-xl-0 mt-5">
                <div className="about-img mb-4">
                  <img src={aboutbanner} alt="about" className="img-fluid rounded-4" />
                </div>

                <div className="row stats-box text-center">
                  <div className="col-md-4 mb-3">
                    <h4>150K</h4>
                    <span>Happy Travellers</span>
                  </div>
                  <div className="col-md-4 mb-3">
                    <h4>95.7%</h4>
                    <span>Satisfaction Rate</span>
                  </div>
                  <div className="col-md-4 mb-3">
                    <h4>5000+</h4>
                    <span>Tours Completed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="price-section section">
        <div className="container">
          <div className="section-title mb-5">
            <div className="row text-center">
              <p>Package Pricing Plan</p>
              <h2>Simply Choose The Pricing Plan <br /> That Fits You Best </h2>
            </div>
          </div>
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-4">
                <div className="pricing-card">
                  <h5>Basic</h5>
                  <p className="mb-3">Best for personal and basic needs</p>
                  <div className="pricing-content d-flex align-items-center gap-3 border-top">
                    <h2>$10</h2>
                    <span>One-time Payment</span>
                  </div>
                  <ul className="list-unstyled mt-4">
                    <li className="mb-4">
                      <i className="ri-check-line"></i>
                      20+ Partners
                    </li>
                    <li className="mb-4">
                      <i className="ri-check-line"></i>
                      Mass Messaging
                    </li>
                    <li className="mb-4">
                      <i className="ri-check-line"></i>
                      Lorem ipsum dolor sit amet consectetur.
                    </li>
                    <li className="mb-4 disabled-li">
                      <i className="ri-check-line"></i>
                      Online Booking Engine
                    </li>
                    <li className="mb-4 disabled-li">
                      <i className="ri-check-line"></i>
                      Business Card Scanner
                    </li>
                  </ul>
                  <button className='btn text-white'>Try Now <i className="ri-arrow-right-up-line"></i></button>
                  <p className="text-white mt-3">Per month +2% per Online Booking</p>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="pricing-card">
                  <h5>Pro <span className='popular-tag text-white'>Popular</span></h5>
                  <p className="mb-3">Best for personal and basic needs</p>
                  <div className="pricing-content d-flex align-items-center gap-3 border-top">
                    <h2>$88</h2>
                    <span>One-time Payment</span>
                  </div>
                  <ul className="list-unstyled mt-4">
                    <li className="mb-4">
                      <i className="ri-check-line"></i>
                      20+ Partners
                    </li>
                    <li className="mb-4">
                      <i className="ri-check-line"></i>
                      Mass Messaging
                    </li>
                    <li className="mb-4">
                      <i className="ri-check-line"></i>
                      Lorem ipsum dolor sit amet consectetur.
                    </li>
                    <li className="mb-4 disabled-li">
                      <i className="ri-check-line"></i>
                      Online Booking Engine
                    </li>
                    <li className="mb-4 disabled-li">
                      <i className="ri-check-line"></i>
                      Business Card Scanner
                    </li>
                  </ul>
                  <button className='btn text-white'>Try Now <i className="ri-arrow-right-up-line"></i></button>
                  <p className="text-white mt-3">Per month +2% per Online Booking</p>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="pricing-card">
                  <h5>Custom</h5>
                  <p className="mb-3">Best for personal and basic needs</p>
                  <ul className="list-unstyled mt-4">
                    <li className="mb-4">
                      <i className="ri-check-line"></i>
                      Mass Messaging
                    </li>
                    <li className="mb-4">
                      <i className="ri-check-line"></i>
                      Lorem ipsum dolor sit amet consectetur.
                    </li>
                    <li className="mb-4">
                      <i className="ri-check-line"></i>
                      Lorem ipsum dolor sit amet consectetur.
                    </li>
                    <li className="mb-4">
                      <i className="ri-check-line"></i>
                      Lorem ipsum dolor sit amet .
                    </li>
                    <li className="mb-4">
                      <i className="ri-check-line"></i>
                      Lorem ipsum dolor.
                    </li>
                    <li className="mb-4 disabled-li">
                      <i className="ri-check-line"></i>
                      Online Booking Engine
                    </li>
                    <li className="mb-4 disabled-li">
                      <i className="ri-check-line"></i>
                      Business Card Scanner
                    </li>
                  </ul>
                  <button className='btn text-white'>Contact <i className="ri-arrow-right-up-line"></i></button>
                  <p className="text-white mt-3">Please Contact Anytime</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="brands-container section">
        <div className="container">
          <div className="row">
            <Swiper
              className='brand-swiper'
              slidesPerView={4}
              spaceBetween={30}
              loop={true}
              autoplay={true}
              centeredSlides={true}
            >
              <SwiperSlide>
                <div className="brand-image">
                  <img src={brand1} alt="brand-image" className='img-fluid h-20 object-contain' />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="brand-image">
                  <img src={brand2} alt="brand-image" className='img-fluid h-20 object-contain' />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="brand-image">
                  <img src={brand3} alt="brand-image" className='img-fluid h-20 object-contain' />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="brand-image">
                  <img src={brand4} alt="brand-image" className='img-fluid h-20 object-contain' />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="brand-image">
                  <img src={brand5} alt="brand-image" className='img-fluid h-20 object-contain' />
                </div>
              </SwiperSlide>


            </Swiper>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default About