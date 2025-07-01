import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // ✅ Add this
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { CartContext } from '../../Context/CartContext';
import bgvideo from '../../assets/travel1.mp4';
import user1 from '../../assets/user-1.jpeg'
import user2 from '../../assets/user-2.png'
import user3 from '../../assets/user-3.png'
import user4 from '../../assets/user-4.jpeg'

import hand from '../../assets/hand.png';
import destination1 from '../../assets/destination-1.png';
import destination2 from '../../assets/destination-2.png';
import destination3 from '../../assets/destination-3.jpeg';
import destination4 from '../../assets/destination-4.png';
import destination5 from '../../assets/destination-5.png';
import destination6 from '../../assets/destination-6.png';
import destination7 from '../../assets/destination-7.png';

import Explore1 from '../../assets/explore-1.svg';
import Explore2 from '../../assets/explore-2.svg';
import Explore3 from '../../assets/explore-3.svg';
import Explore4 from '../../assets/explore-4.svg';
import Explore5 from '../../assets/explore-5.svg';

import ExploreImg1 from '../../assets/explore-img1.png';
import ExploreImg2 from '../../assets/explore-img2.png';
import ExploreImg3 from '../../assets/explore-img3.png';
import ExploreImg4 from '../../assets/explore-img4.png';
import ExploreImg5 from '../../assets/explore-img5.png';

import aboutbanner from '../../assets/about-banner-three.png';

import tst from '../../assets/testimonial-1.jpeg';
import tstbanner from '../../assets/testimonial-three-banner.png';;

import brand1 from '../../assets/brand-1.jpeg';
import brand2 from '../../assets/brand-2.jpeg';
import brand3 from '../../assets/brand-3.jpeg';
import brand4 from '../../assets/brand-4.png';
import brand5 from '../../assets/brand-5.png';

import news4 from '../../assets/news-4.png';
import news5 from '../../assets/news-5.png';
import news6 from '../../assets/news-6.png';

import tourData from '../../Data/Tours.json'

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';

function Index() {
    const [tours, setTours] = useState([]);
    const [visibleCount, setVisibleCount] = useState(6);
    const { cartItems, addToCart } = useContext(CartContext);

    useEffect(() => {
        setTours(tourData);
    }, [])

    const handleBookNow = (tour) => {
        const alreadyInCart = cartItems.find((item) => item.id === tour.id);

        if (alreadyInCart) {
            alert("Tour already in cart")
        } else {
            addToCart({ ...tour, quantity: 1 });
            alert('Added')
        }
        console.log('Active tab index:', activeIndex);
        console.log('Tab data:', tabs[activeIndex]);

    };

    const [activeIndex, setActiveIndex] = useState(0);

    const tabs = [
        { title: 'Fishing & Swiming', img: Explore1, ExploreImg: ExploreImg1 },
        { title: 'Boating & Kayaking', img: Explore2, ExploreImg: ExploreImg2 },
        { title: 'Trailers & Sports', img: Explore3, ExploreImg: ExploreImg3 },
        { title: 'Mountain & Hill Hiking', img: Explore4, ExploreImg: ExploreImg4 },
        { title: 'Paragliding Tours', img: Explore5, ExploreImg: ExploreImg5 },
        { title: 'Music & Relaxing', img: Explore2, ExploreImg: ExploreImg2 },
        { title: 'Mountain & Hill Hiking', img: Explore4, ExploreImg: ExploreImg4 },
        { title: 'Fishing & Swiming', img: Explore1, ExploreImg: ExploreImg1 },

    ]
    return (
        <>
            {/* {Hero} */}
            <div className="hero-header section">
                <video autoPlay muted loop playsInline className='hero-video'>
                    <source src={bgvideo} type='video/mp4' />
                </video>

                <div className="hero-overlay text-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6">
                                <h1 className="hero-title">Plan tours to dream <br /> locations in just a click!</h1>
                                <p className="hero-description">Travel is a transformative and enriching experience that
                                    allows individuals to explore new destinations.
                                </p>

                                <div className="d-flex align-items-center">
                                    <div className="users">
                                        <img src={user1} className='user-img' alt="user-image" />
                                        <img src={user2} className='user-img' alt="user-image" />
                                        <img src={user3} className='user-img' alt="user-image" />
                                        <img src={user4} className='user-img' alt="user-image" />
                                        <span>5K+</span>
                                    </div>
                                    <p className="m-0 px-3 fs-6 fw-semibold">Happy Customer</p>
                                    <img src={hand} className='img-fluid' alt="hand-image" width={40} height={40} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container w-100 travel-box p-4 bg-dark text-white rounded z-0">
                        <div className="row align-items-center justify-content-between w-100 gap-4 gap-xl-0">
                            <div className="col-xl-2 travel-info" style={{ borderRight: '1px solid rgba(248, 250, 252, 0.08)' }}>
                                <label className="form-label fw-semibold fs-5 text-white">
                                    <i className="bi bi-geo-alt-fill me-2 fs-6"></i>
                                    Destination
                                </label>
                                <select className="form-select bg-dark text-white border-secondary border-2">
                                    <option>Chittagong, Turkish</option>
                                    <option>Dhaka, Bangladesh</option>
                                    <option>Istanbul, Turkey</option>
                                </select>
                            </div>
                            <div className="col-xl-2 travel-info" style={{ borderRight: '1px solid rgba(248, 250, 252, 0.08)' }}>
                                <label className="form-label fw-semibold fs-5 text-white">
                                    <i className="bi bi-airplane me-2 fs-6"></i>
                                    Tour Type
                                </label>
                                <select className="form-select bg-dark text-white border-secondary border-2">
                                    <option>Pre-book Type</option>
                                    <option>Instant Booking</option>
                                    <option>Custom Package</option>
                                </select>
                            </div>
                            <div className="col-xl-2 travel-info" style={{ borderRight: '1px solid rgba(248, 250, 252, 0.08)' }}>
                                <label className="form-label fw-semibold fs-5 text-white">
                                    <i className="bi bi-clock me-2 fs-6"></i>
                                    Date From
                                </label>
                                <input
                                    type="date"
                                    id='datepicker'
                                    className='form-control bg-dark text-white border-1'
                                />
                            </div>
                            <div className="col-xl-2 travel-info" style={{ borderRight: '1px solid rgba(248, 250, 252, 0.08)' }}>
                                <label className="form-label fw-semibold fs-5 text-white">
                                    <i className="bi bi-person me-2 fs-6"></i>
                                    Guests
                                </label>
                                <select className="form-select bg-dark text-white border-1">
                                    <option>02</option>
                                    <option>01</option>
                                    <option>03</option>
                                    <option>04+</option>
                                </select>
                            </div>
                            <div className="col-xl-2 travel-info" >
                                <button className="travel-btn py-3 px-5 fs-6 btn btn-primary fw-semibold" style={{ backgroundColor: '#f26f55', border: 'none', cursor: 'pointer' }}>
                                    Search Plan
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* {Banner}  */}
            <div className="banner-container section">
                <div className="container">
                    <div className="row text-center mb-5">
                        <div className="section-title">
                            <p>Special offer</p>
                            <h2>Winter Our Big Offers to Inspire You</h2>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-4">
                            <div className="banner-content z-1 py-5 px-4 rounded-3 banner-bg-1 text-white">
                                <p className="highlight-text">Save up to</p>
                                <h4 className='fs-1 fw-semibold'>50%</h4>
                                <p className="pera fs-4 fw-bold">Lets Explore the world</p>
                                <div className="location d-flex align-items-center gap-2">
                                    <i className="bi bi-geo-alt"></i>
                                    <p className="name mb-0">Bangkok, Thailand</p>
                                </div>
                                <button className="btn banner-btn px-4">Booking now</button>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="banner-content z-1 py-5 px-4 rounded-3 banner-bg-2 text-white">
                                <p className="highlight-text">Nearby Hotel</p>
                                <p className="pera">Up to <span className='highlights-text'>50%</span></p>

                                <div className="location d-flex align-items-center gap-2">
                                    <i className="bi bi-geo-alt"></i>
                                    <p className="name mb-0">Bangkok, Thailand</p>
                                </div>
                                <button className="btn banner-btn px-4">Booking now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* {Tours} */}
            <div className="tours-container section tours-container-1 position-relative">
                <div className="container">
                    <div className="row text-center mb-5">
                        <div className="section-title d-flex align-items-center flex-column">
                            <p>Features Tours</p>
                            <h2>Most Favourite Tour Place <br />in The World</h2>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <Swiper
                            modules={[Navigation, Pagination]}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }}
                            pagination={{ clickable: true }}
                            slidesPerView={4}
                            spaceBetween={20}
                            breakpoints={{
                                1399: { slidesPerView: 4 },
                                1199: { slidesPerView: 3 },
                                991: { slidesPerView: 2 },
                                767: { slidesPerView: 1.5 },
                                0: { slidesPerView: 1 },
                            }}
                            className="mt-4 swiper position-relative"
                        >
                            {tourData
                                .filter(tour => tour.id >= 19 && tour.id <= 33)
                                .map(tour => (
                                    <SwiperSlide key={tour.id}>
                                        <div className="card h-100 tour-card shadow-sm position-relative">
                                            <div className="position-relative">
                                                <Link to={`/TourDetail/${tour.id}`}>
                                                    <img
                                                        src={tour.image}
                                                        className="card-img-top rounded-3"
                                                        alt={tour.title}
                                                    />
                                                </Link>
                                                <i
                                                    className="ri-shopping-cart-2-line fs-5 text-white position-absolute top-0 end-0 m-2"
                                                    role="button"
                                                    onClick={() => handleBookNow(tour)}
                                                ></i>
                                            </div>
                                            <div className="card-body py-3">
                                                <h5 className="card-title fw-semibold mb-1">{tour.title}</h5>
                                                <p className="mb-3">
                                                    <i className="ri-map-pin-line"></i> {tour.location}
                                                </p>
                                                <div
                                                    className="d-flex flex-wrap justify-content-between small mb-3 p-2 rounded-2"
                                                    style={{ backgroundColor: 'rgba(248, 250, 252, .08)' }}
                                                >
                                                    <div className="me-3">
                                                        <i className="ri-time-line me-1"></i> {tour.duration}
                                                    </div>
                                                    <div>
                                                        <i className="ri-user-line me-1"></i> {tour.person}
                                                    </div>
                                                </div>
                                                <div className="d-flex mt-2 align-items-center justify-content-between small">
                                                    <div className="ms-5" style={{ color: '#8f94a3' }}>
                                                        From-
                                                        <span className="text-white fw-bold">
                                                            {' '}
                                                            ${tour.price}
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <i className="ri-star-fill text-warning me-1"></i>
                                                        <span>
                                                            {tour.rating} ({tour.reviews})
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}

                            {/* Navigation arrows */}
                            <div className="swiper-button-prev"></div>
                            <div className="swiper-button-next"></div>

                            {/* Scrollbar */}
                            <div className="swiper-scrollbar mt-3"></div>
                        </Swiper>
                    </div>
                </div>
            </div>

            {/* {About} */}
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

            {/* {Tours-container-2} */}
            <div className="tours-container section tours-container-2 position-relative">
                <div className="container">
                    <div className="row text-center mb-5">
                        <div className="section-title d-flex align-items-center flex-column">
                            <p>Features Tours</p>
                            <h2>Most Favourite Tour Place <br />in The World</h2>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <Swiper
                            modules={[Navigation, Pagination]}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }}
                            pagination={{ clickable: true }}
                            slidesPerView={4}
                            spaceBetween={20}
                            breakpoints={{
                                1399: { slidesPerView: 4 },
                                1199: { slidesPerView: 3 },
                                991: { slidesPerView: 2 },
                                767: { slidesPerView: 1.5 },
                                0: { slidesPerView: 1 },
                            }}
                            className="mt-4 swiper position-relative"
                        >
                            {tourData
                                .filter(tour => tour.id >= 26 && tour.id <= 30)
                                .map(tour => (
                                    <SwiperSlide key={tour.id}>
                                        <div className="card h-100 tour-card shadow-sm position-relative">
                                            <div className="position-relative">
                                                <Link to={`/TourDetail/${tour.id}`}>
                                                    <img
                                                        src={tour.image}
                                                        className="card-img-top rounded-3"
                                                        alt={tour.title}
                                                    />
                                                </Link>
                                                <i
                                                    className="ri-shopping-cart-2-line fs-5 text-white position-absolute top-0 end-0 m-2"
                                                    role="button"
                                                    onClick={() => handleBookNow(tour)}
                                                ></i>
                                            </div>
                                            <div className="card-body py-3">
                                                <h5 className="card-title fw-semibold mb-1">{tour.title}</h5>
                                                <p className="mb-3">
                                                    <i className="ri-map-pin-line"></i> {tour.location}
                                                </p>
                                                <div
                                                    className="d-flex flex-wrap justify-content-between small mb-3 p-2 rounded-2"
                                                    style={{ backgroundColor: 'rgba(248, 250, 252, .08)' }}
                                                >
                                                    <div className="me-3">
                                                        <i className="ri-time-line me-1"></i> {tour.duration}
                                                    </div>
                                                    <div>
                                                        <i className="ri-user-line me-1"></i> {tour.person}
                                                    </div>
                                                </div>
                                                <div className="d-flex mt-2 align-items-center justify-content-between small">
                                                    <div className="ms-5" style={{ color: '#8f94a3' }}>
                                                        From-
                                                        <span className="text-white fw-bold">
                                                            {' '}
                                                            ${tour.price}
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <i className="ri-star-fill text-warning me-1"></i>
                                                        <span>
                                                            {tour.rating} ({tour.reviews})
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}

                            {/* Navigation arrows */}
                            <div className="swiper-button-prev"></div>
                            <div className="swiper-button-next"></div>

                            {/* Scrollbar */}
                            <div className="swiper-scrollbar mt-3"></div>
                        </Swiper>
                    </div>
                </div>
            </div>

            {/* Destination Container */}
            <div className="destination-container section">
                <div className="container">
                    <div className="row text-center mb-5">
                        <div className="section-title">
                            <p>Destination List</p>
                            <h2>Explore the Beautiful<br /> Places Around World</h2>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-7 col-md-7 mb-4 mb-lg-2">
                            <div className="destination-item w-100 rounded-3 text-white">
                                <img src={destination1} alt="destination-image" />
                                <div className="rating-badge">
                                    <i className="ri-star-s-fill"></i>
                                    4.5
                                </div>

                                <div className="destination-info p-4 w-100">
                                    <div className="destination-name">
                                        <p className='pera m-0 fs-2 fw-bold'>Spain</p>
                                        <div className="location d-flex gap-2">
                                            <i className="ri-map-pin-line"></i>
                                            <p className="name m-0">Malaga View</p>
                                        </div>
                                    </div>

                                    <div className="arrow-btn">
                                        <i className="ri-arrow-right-line fs-4"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-7 col-md-7 mb-4 mb-lg-2">
                            <div className="destination-item w-100 rounded-3 text-white">
                                <img src={destination2} alt="destination-image" />
                                <div className="rating-badge">
                                    <i className="ri-star-s-fill"></i>
                                    4.5
                                </div>

                                <div className="destination-info p-4 w-100">
                                    <div className="destination-name">
                                        <p className='pera m-0 fs-2 fw-bold'>Spain</p>
                                        <div className="location d-flex gap-2">
                                            <i className="ri-map-pin-line"></i>
                                            <p className="name m-0">Malaga View</p>
                                        </div>
                                    </div>

                                    <div className="arrow-btn">
                                        <i className="ri-arrow-right-line fs-4"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-7 col-md-7 mb-4 mb-lg-2">
                            <div className="destination-item w-100 rounded-3 text-white">
                                <img src={destination3} alt="destination-image" />
                                <div className="rating-badge">
                                    <i className="ri-star-s-fill"></i>
                                    4.5
                                </div>

                                <div className="destination-info p-4 w-100">
                                    <div className="destination-name">
                                        <p className='pera m-0 fs-2 fw-bold'>Spain</p>
                                        <div className="location d-flex gap-2">
                                            <i className="ri-map-pin-line"></i>
                                            <p className="name m-0">Malaga View</p>
                                        </div>
                                    </div>

                                    <div className="arrow-btn">
                                        <i className="ri-arrow-right-line fs-4"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="destination-gallery">
                            <div className="row mt-4">
                                <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                                    <div className="destination-item w-100 rounded-3 text-white">
                                        <img src={destination4} alt="destination-image" />
                                        <div className="rating-badge">
                                            <i className="ri-star-s-fill"></i>
                                            4.5
                                        </div>

                                        <div className="destination-info p-4 w-100">
                                            <div className="destination-name">
                                                <p className='pera m-0 fs-2 fw-bold'>Switzerland</p>
                                                <div className="location d-flex gap-2">
                                                    <i className="ri-map-pin-line"></i>
                                                    <p className="name m-0">Zurich View</p>
                                                </div>
                                            </div>

                                            <div className="arrow-btn">
                                                <i className="ri-arrow-right-line fs-4"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                                    <div className="destination-item w-100 rounded-3 text-white">
                                        <img src={destination5} alt="destination-image" />
                                        <div className="rating-badge">
                                            <i className="ri-star-s-fill"></i>
                                            4.5
                                        </div>

                                        <div className="destination-info p-4 w-100">
                                            <div className="destination-name">
                                                <p className='pera m-0 fs-2 fw-bold'>Australia</p>
                                                <div className="location d-flex gap-2">
                                                    <i className="ri-map-pin-line"></i>
                                                    <p className="name m-0">Zurich View</p>
                                                </div>
                                            </div>

                                            <div className="arrow-btn">
                                                <i className="ri-arrow-right-line fs-4"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                                    <div className="destination-item w-100 rounded-3 text-white">
                                        <img src={destination6} alt="destination-image" />
                                        <div className="rating-badge">
                                            <i className="ri-star-s-fill"></i>
                                            4.5
                                        </div>

                                        <div className="destination-info p-4 w-100">
                                            <div className="destination-name">
                                                <p className='pera m-0 fs-2 fw-bold'>Canada</p>
                                                <div className="location d-flex gap-2">
                                                    <i className="ri-map-pin-line"></i>
                                                    <p className="name m-0">Toronto View</p>
                                                </div>
                                            </div>

                                            <div className="arrow-btn">
                                                <i className="ri-arrow-right-line fs-4"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                                    <div className="destination-item w-100 rounded-3 text-white">
                                        <img src={destination7} alt="destination-image" />
                                        <div className="rating-badge">
                                            <i className="ri-star-s-fill"></i>
                                            4.5
                                        </div>

                                        <div className="destination-info p-4 w-100">
                                            <div className="destination-name">
                                                <p className='pera m-0 fs-2 fw-bold'>Canada</p>
                                                <div className="location d-flex gap-2">
                                                    <i className="ri-map-pin-line"></i>
                                                    <p className="name m-0">Toronto View</p>
                                                </div>
                                            </div>

                                            <div className="arrow-btn">
                                                <i className="ri-arrow-right-line fs-4"></i>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* {Explore Section} */}
            <div className="explore-section section">
                <div className="container">
                    <div className="row text-center">
                        <div className="section-title">
                            <p>Explore The World</p>
                            <h2>Our Best Offer Package <br /> For You</h2>
                        </div>
                    </div>

                    <div className="row py-5 mt-5">
                        {/* Left Tabs */}
                        <div className="col-lg-6">
                            <div className="explore-tabs-wrap p-4 pb-2 rounded-3">
                                {tabs.map((tab, index) => (
                                    <div
                                        key={index}
                                        className={`explore-tabs d-flex align-items-center mb-3 px-3 py-2 ${activeIndex === index ? 'active-tab' : ''}`}
                                        onClick={() => setActiveIndex(index)}
                                        style={{
                                            cursor: 'pointer',
                                            borderRadius: '10px',
                                            backgroundColor: activeIndex === index ? '#017b6e' : 'transparent',
                                            transition: 'background-color 0.3s',
                                        }}
                                    >
                                        <img
                                            src={tab.img}
                                            className="me-3"
                                            alt={tab.title}
                                            style={{ width: 32, height: 32 }}
                                        />
                                        <h5 className="m-0 text-white">{tab.title}</h5>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="col-lg-6 explore-content text-white">
                            <h2 className="pb-3">{tabs[activeIndex].title}</h2>
                            <p className="mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores repudiandae harum
                                deserunt, officiis animi adipisci architecto quo ut illum perferendis? Similique nesciunt
                                error enim officia, saepe mollitia deleniti aut vitae?
                            </p>

                            <span>
                                <p className="m-0 mb-2 ps-3">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero inventore blanditiis enim
                                    commodi praesentium mollitia laboriosam, dignissimos obcaecati sunt quis veritatis?
                                </p>
                            </span>
                            <span>
                                <p className="m-0 mb-2 ps-3">
                                    Voluptatem facilis, nesciunt totam laudantium minus recusandae ullam nemo?
                                </p>
                            </span>

                            <div className="explore-image mt-4">
                                <img
                                    src={tabs[activeIndex].ExploreImg}
                                    className="img-fluid rounded-4"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonial Section */}
            <div className="testimonial-container section">
                <div className="container">
                    <div className="row text-center mb-5">
                        <div className="section-title">
                            <p>Testimonials</p>
                            <h2>What People Have Said <br /> About Our Service</h2>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <Swiper
                                className='tst-swiper'
                                loop={true}
                            >
                                <SwiperSlide>
                                    <div className="tst-item">
                                        <div className="tst-user d-flex align-items-center gap-2">
                                            <img src={tst} alt="testimonials-image" width={50} height={50} className='img-fluid rounded-cirle border-white' />
                                            <p className="mb-0 fw-bold text-white fs-6">David Malan <span className='fw-normal'>Traveler</span> </p>
                                        </div>

                                        <div className="tst-ratings mt-3 mb-4">
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-fill ps-1"></i>
                                            <i className="ri-star-fill ps-1"></i>
                                            <i className="ri-star-fill ps-1"></i>
                                            <i className="ri-star-fill ps-1"></i>
                                        </div>

                                        <p className="fw-bold fs-5 mb-4">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse ipsa
                                            libero illo minus maxime dolores nesciunt, neque ipsam molestias magnam.
                                            Omnis repudiandae doloribus reiciendis explicabo possimus dicta tenetur saepe eos.
                                        </p>

                                        <div className="tst-footer d-flex align-items-center justify-content-between">
                                            <a href="#" className='text-white text-decoration-none fw-semibold text-uppercase fs-4 m-0'>
                                                Fly <span style={{ color: 'rgb(242,111,85' }}>BY</span>
                                            </a>
                                            <p className="mb-0">Feb 15, 2025</p>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="tst-item">
                                        <div className="tst-user d-flex align-items-center gap-2">
                                            <img src={tst} alt="testimonials-image" width={50} height={50} className='img-fluid rounded-cirle border-white' />
                                            <p className="mb-0 fw-bold text-white fs-6">David Malan <span className='fw-normal'>Traveler</span> </p>
                                        </div>

                                        <div className="tst-ratings mt-3 mb-4">
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-fill ps-1"></i>
                                            <i className="ri-star-fill ps-1"></i>
                                            <i className="ri-star-fill ps-1"></i>
                                            <i className="ri-star-fill ps-1"></i>
                                        </div>

                                        <p className="fw-bold fs-5 mb-4">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse ipsa
                                            libero illo minus maxime dolores nesciunt, neque ipsam molestias magnam.
                                            Omnis repudiandae doloribus reiciendis explicabo possimus dicta tenetur saepe eos.
                                        </p>

                                        <div className="tst-footer d-flex align-items-center justify-content-between">
                                            <a href="#" className='text-white text-decoration-none fw-semibold text-uppercase fs-4 m-0'>
                                                Fly <span style={{ color: 'rgb(242,111,85' }}>BY</span>
                                            </a>
                                            <p className="mb-0">Feb 15, 2025</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>

                        <div className="col-md-6">
                            <div className="tst-banner rounded-5 overflow-hidden position-relative">
                                <img src={tstbanner} alt="testimonals-image" className='img-fluid' />
                                <span className='bi bi-play-fill'></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Brands Section */}
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
                                    <img src={brand1} alt="brand-image" className='img-fluid' />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="brand-image">
                                    <img src={brand2} alt="brand-image" className='img-fluid' />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="brand-image">
                                    <img src={brand3} alt="brand-image" className='img-fluid' />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="brand-image">
                                    <img src={brand4} alt="brand-image" className='img-fluid' />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="brand-image">
                                    <img src={brand5} alt="brand-image" className='img-fluid' />
                                </div>
                            </SwiperSlide>


                        </Swiper>
                    </div>
                </div>
            </div> */}

            {/* Blog Section */}
            <div className="blog-section section">
                <div className="container">
                    <div className="row text-center mb-5">
                        <div className="section-title text-white">
                            <p>News & Article</p>
                            <h3>Latest News & Articles from The <br />Blog Posts </h3>

                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-4">
                            <div className="blog-card">
                                <div className="blog-img">
                                    <img src={news4} alt="" className='card-img-top rounded-3' />
                                </div>

                                <div className="blog-card-body">
                                    <h6 className="mb-2">Tour Guide</h6>
                                    <h5 className="card-title text-white mb-4">The world is a book and Those who do not Travel Read only one page</h5>
                                    <div className="d-flex justify-content-between align-items-center mt-4">
                                        <div className="authors d-flex">
                                            <img src={user1} alt="" className='user-image' />
                                            <img src={user2} alt="" className='user-image' />
                                            <img src={user3} alt="" className='user-image' />
                                            <img src={user4} alt="" className='user-image' />
                                        </div>
                                        <span>10 Mins Read</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="blog-card">
                                <div className="blog-img">
                                    <img src={news5} alt="" className='card-img-top rounded-3' />
                                </div>

                                <div className="blog-card-body">
                                    <h6 className="mb-2">Tour Guide</h6>
                                    <h5 className="card-title text-white mb-4">The world is a book and Those who do not Travel Read only one page</h5>
                                    <div className="d-flex justify-content-between align-items-center mt-4">
                                        <div className="authors d-flex">
                                            <img src={user1} alt="" className='user-image' />
                                            <img src={user2} alt="" className='user-image' />
                                            <img src={user3} alt="" className='user-image' />
                                            <img src={user4} alt="" className='user-image' />
                                        </div>
                                        <span>10 Mins Read</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="blog-card">
                                <div className="blog-img">
                                    <img src={news6} alt="" className='card-img-top rounded-3' />
                                </div>

                                <div className="blog-card-body">
                                    <h6 className="mb-2">Tour Guide</h6>
                                    <h5 className="card-title text-white mb-4">The world is a book and Those who do not Travel Read only one page</h5>
                                    <div className="d-flex justify-content-between align-items-center mt-4">
                                        <div className="authors d-flex">
                                            <img src={user1} alt="" className='user-image' />
                                            <img src={user2} alt="" className='user-image' />
                                            <img src={user3} alt="" className='user-image' />
                                            <img src={user4} alt="" className='user-image' />
                                        </div>
                                        <span>10 Mins Read</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Price Section */}
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
        </>
    );
}

export default Index