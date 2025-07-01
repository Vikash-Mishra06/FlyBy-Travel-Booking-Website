import React, { useContext, useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { CartContext } from '../../Context/CartContext'
import hotelData from '../../Data/Hotel.json'
import 'react-toastify/ReactToastify.css'

function Hotels() {

    const { cartItems, addToCart } = useContext(CartContext);

    const handleBookNow = (hotel) => {
        const item = {
            id: hotel.id,
            title: hotel.name, // ✅ Corrected
            image: hotel.image,
            price: hotel.price,
            quantity: 1
        };


        const alreadyExists = cartItems.find(h => h.id === hotel.id);
        if (!alreadyExists) {
            addToCart(item);
            toast.success(`${hotel.name} added to cart`)
        } else {
            toast.info("Already in cart")
        }
    };
    return (
        <>
            <div className="main-wrapper">
                <ToastContainer />

                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 mb-4">
                            <div className="filter-sidebar shadow-sm">
                                <h5 className='fw-bold mb-4 d-flex align-items-center'>
                                    <i className="ri-filter-3-fill me-2 text-secondary"></i>
                                    Advance Filter
                                </h5>

                                <fieldset className="filter-section">
                                    <legend><i className="ri-map-pin-line me-2"></i>Destination</legend>
                                    <select className="form-select">
                                        <option value="">Select Destination</option>
                                        <option value="">USA</option>
                                        <option value="">Turkey</option>
                                        <option value="">Switzerland</option>
                                        <option value="">Bora Bora</option>
                                    </select>
                                </fieldset>

                                <fieldset className="filter-section">
                                    <legend><i className="ri-flight-takeoff-line me-2"></i>Tour Type</legend>
                                    <select className="form-select">
                                        <option value="">Select Typr</option>
                                        <option value="">Adventure</option>
                                        <option value="">Relaxation</option>
                                        <option value="">Cultural</option>
                                    </select>
                                </fieldset>

                                <fieldset className="filter-section">
                                    <legend><i className="ri-calendar-event-line me-2"></i>Date Form</legend>
                                    <input type="date" className='form-control' />
                                </fieldset>

                                <fieldset className="filter-section">
                                    <legend><i className="ri-user-smile-line me-2"></i>Guests</legend>
                                    <input type="number" className='form-control' placeholder='number of guests' min={1} />
                                </fieldset>

                                <fieldset className="filter-section">
                                    <legend><i className="ri-star-smile-line me-2"></i>Traveler Rating</legend>
                                    <div className="d-flex flex-wrap gap-2">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <span key={star} className='rating-badge'>
                                                <i className="ri-star-fill text-warning me-1"></i>
                                                {star}
                                            </span>
                                        ))}
                                    </div>
                                </fieldset>

                                <fieldset className="filter-section">
                                    <legend><i className="ri-price-tag-3-line me-2"></i>Special Offers</legend>
                                    <div className="form-check">
                                        <input type="checkbox" className='form-check-input' id='likely' />
                                        <label htmlFor="likely" className='form-check-label'>Likely to Sell Out</label>
                                    </div>

                                    <div className="form-check">
                                        <input type="checkbox" className='form-check-input' id='discount' />
                                        <label htmlFor="discount" className='form-check-label'>Winter Discount</label>
                                    </div>
                                </fieldset>

                                <fieldset className="filter-section">
                                    <legend><i className="ri-translate-2 me-2">Languages</i></legend>
                                    {["English", "Spanish", "French", "Hindi"].map((lang, i) => {
                                        <div className="form-check" key={i}>
                                            <input type="checkbox" className='form-check-input' id={lang} />
                                            <label htmlFor={lang} className='form-check-label' >{lang}</label>
                                        </div>
                                    })}
                                </fieldset>
                            </div>
                        </div>

                        <div className="col-lg-9">
                            <div className="row">
                                {hotelData.map((hotel) => (
                                    <div className="col-md-6 col-xl-4 mb-4" key={hotel.id}>
                                        <div className="hotel-card p-3 shadow-sm h-100">
                                            <div className="position-relative mb-3">
                                                <img src={hotel.image} className="w-100 img-fluid rounded-3" alt={hotel.title} />
                                                <span className="badge position-absolute top-0 end-0 m-2">
                                                    <i className="ri-star-fill me-1"></i>
                                                    {hotel.rating} ({hotel.reviews})
                                                </span>
                                            </div>
                                            <h6 className="fw-bold mb-1">{hotel.name}</h6>
                                            <div className="text-muted mb-2">
                                                <i className="ri-map-pin-line me-1"></i>
                                                {hotel.location}
                                            </div>

                                            <div className="d-flex flex-wrap gap-2 text-muted mb-3 small">
                                                {hotel.facilities.map((item, idx) => (
                                                    <span key={idx} className='d-flex align-items-center'>
                                                        <i className={`ri-${item.icon}-line me-1`} ></i>
                                                        {item.name}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="d-flex justify-content-between align-items-center mt-auto">
                                                <span className="fw-semibold text-primary">
                                                    ${hotel.price} <small>/Person</small>
                                                </span>
                                                <button className='btn btn-outline-primary btn-sm text-white'
                                                    onClick={() => handleBookNow(hotel)}
                                                >Book Now</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hotels