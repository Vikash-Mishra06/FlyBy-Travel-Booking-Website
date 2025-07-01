import React, { useState, useEffect } from 'react';
import tourData from '../../Data/Tours.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import img1 from '../../../public/Images/image14.png';
import img2 from '../../../public/Images/image10.jpeg';
import img3 from '../../../public/Images/image8.jpeg';
import img4 from '../../../public/Images/image3.png';

import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/ReactToastify.css';

const TourDetail = () => {
    const [cartCount, setCartCount] = useState(0);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        // Listen to cart updates
        const updateCartCount = (e) => setCartCount(e.detail);
        window.addEventListener('cartUpdated', updateCartCount);

        // Set initial cart count
        const initialCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartCount(initialCart.length);

        return () => window.removeEventListener('cartUpdated', updateCartCount);
    }, []);

    const tour = tourData.find((t) => String(t.id) === id);

    const fallbackTour = {
        title: 'Dusitd2 samyan Bangkok',
        location: 'Bangkok, Thailand',
        duration: '3 Days 2 Night',
        person: '2 Person',
        price: 113,
        rating: 4.7,
        reviews: 20,
        image: 'Images/image1.jpeg'
    };

    const selectedTour = tour || fallbackTour;

    const addToCart = (tour) => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const alreadyAdded = cart.find((find) => find.id === tour.id); // fixed bug

        if (!alreadyAdded) {
            cart.push(tour);
            localStorage.setItem("cart", JSON.stringify(cart));
            window.dispatchEvent(new CustomEvent('cartUpdated', { detail: cart.length }));

            toast.success('Tour added to Cart!', {
                position: "top-right",
                autoClose: 1500,
                onClose: () => navigate('/cart')
            });
        } else {
            toast.info('Tour already added to Cart!', {
                position: "top-right",
                autoClose: 1500,
            });
        }
    };

    return (
        <>
            <div className="tour-detail-page">
                <div className="tour-slider">
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={1.8}
                        spaceBetween={30}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        className='tourSwiper'>
                        {[img1, img2, img3, img4].map((img, idx) => (
                            <SwiperSlide key={idx}>
                                <img src={img} className='tour-slide-img' alt={`slide ${idx + 1}`} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <div className="about-detail-section pt-5">
                <div className="container">
                    <div className="row">
                        {/* LEFT SIDE - TOUR CONTENT */}
                        <div className="col-md-8">
                            <h4 className='tour-title'>{selectedTour.title}</h4>
                            <div className="d-flex gap-3 align-items-center mb-3">
                                <span><i className="ri-map-pin-line"></i>{selectedTour.location}</span>
                                <span><i className="ri-calender-2-line"></i>{selectedTour.duration}</span>
                                <span><i className="ri-user-3-line"></i>{selectedTour.person}</span>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <div>
                                    <strong>From-<span className='fs-2'> ${selectedTour.price}</span> </strong>
                                </div>
                                <div className="text-warning">
                                    <i className="ri-star-fill"></i> {selectedTour.rating} ({selectedTour.reviews} reviews)
                                </div>
                            </div>

                            <section className="mb-4">
                                <h5 className="mb-2">About</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos odio commodi perspiciatis, necessitatibus ipsum praesentium?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, voluptatibus!</p>
                            </section>

                            <div className="row border rounded p-2">
                                <div className="col-md-6">
                                    <h5 className="mb-2">Included</h5>
                                    <ul className="list-unstyle-detail">
                                        <li>Welcome Breakfast</li>
                                        <li>All Entry Tickets</li>
                                        <li>Lunch & Dinner</li>
                                        <li>Evening Snacks</li>
                                        <li>First Aid</li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <h5 className="mb-2">Excluded</h5>
                                    <ul className="list-unstyle-detail">
                                        <li>Personal Expenses</li>
                                        <li>Unmentioned activities</li>
                                        <li>Additional Service</li>
                                    </ul>
                                </div>
                            </div>

                            <section className="mt-4">
                                <h5 className="mb-3">Tour Plan</h5>
                                <div className="accordion" id="tourPlanAccordion">
                                    {["Day 1", "Day 2", "Day 3"].map((day, index) => (
                                        <div className="accordion-item" key={index}>
                                            <h2 className="accordion-header" id={`heading${index}`}>
                                                <button
                                                    className={`accordion-button ${index > 0 ? 'collapsed' : ''}`}
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target={`#collapse${index}`}
                                                    aria-expanded={index === 0}
                                                    aria-controls={`collapse${index}`}
                                                >
                                                    {day} - {selectedTour.location}
                                                </button>
                                            </h2>
                                            <div
                                                id={`collapse${index}`}
                                                className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                                                aria-labelledby={`heading${index}`}
                                                data-bs-parent="#tourPlanAccordion"
                                            >
                                                <div className="accordion-body bg-dark text-white">
                                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, fugiat illum voluptatem numquam repellat rerum.
                                                    <ul className="list-unstyled">
                                                        <li>Personal Expenses</li>
                                                        <li>Unmentioned activities</li>
                                                        <li>Additional Services</li>
                                                    </ul>
                                                    {day}.
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section className="mt-4">
                                <h5 className="mb-2">Policy</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                                <ol className="list-numbered">
                                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                                    <li>Praesentium, numquam?</li>
                                    <li>Doloremque, facere?</li>
                                </ol>
                            </section>
                        </div>

                        {/* RIGHT SIDE - BOOKING WIDGET */}
                        <div className="col-md-4">
                            <div className="p-4 rounded-4 shadow-lg booking-widget bg-dark text-white">
                                <h6 className="text-muted mb-2">From</h6>
                                <h3 className="fw-bold text-light mb-4">
                                    <span className="text-secondary">$ {selectedTour.price}</span>
                                </h3>

                                <form>
                                    <div className="mb-3">
                                        <label className="text-light p-2">Guests</label>
                                        <select className="form-select bg-dark border-secondary text-white">
                                            <option>1 guest</option>
                                            <option>2 guests</option>
                                            <option>3 guests</option>
                                        </select>
                                    </div>

                                    <button
                                        type="button"
                                        className="btn btn-secondary w-100 mt-3 d-flex align-items-center justify-content-center gap-2"
                                        onClick={() => addToCart(selectedTour)}
                                    >
                                        <i className="ri-shopping-cart-line fs-5"></i>
                                        <span>Book Now</span>
                                    </button>
                                </form>

                                <div className="small mt-4 text-muted border-top pt-3">
                                    <i className="ri-check-double-line text-success me-2"></i>
                                    Free Cancellation - Up To 24h Advance
                                </div>

                                {/* Optional Cart Count UI */}
                                <div className="mt-3 text-info text-end">
                                    Cart: {cartCount}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TourDetail;
