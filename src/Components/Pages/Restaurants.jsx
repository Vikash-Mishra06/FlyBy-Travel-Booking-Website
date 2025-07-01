import React, { useContext, useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { CartContext } from '../../Context/CartContext'
import restaurantsData from '../../Data/Restaurant.json'
import 'react-toastify/ReactToastify.css'

function Restaurants() {

  const { cartItems, addToCart } = useContext(CartContext);

  const handleBookTabel = (item) => {
    const alreadyInCart = cartItems.find(cartItem => cartItem.id === item.id);
    if (alreadyInCart) {
      toast.info("Item already in cart");
    } else {
      addToCart({
        id: item.id,
        title: item.name, // ✅ ensure title is stored
        image: item.image,
        price: item.price,
        quantity: 1,
      });
      toast.success("Table added to cart!");
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
                {restaurantsData.map((item) => (
                  <div className="col-md-6 col-xl-4 mb-4" key={item.id}>
                    <div className="restaurant-card p-3 shadow-sm h-100 d-flex flex-column">
                      <div className="position-relative mb-3">
                        <img src={item.image} className="w-100 img-fluid rounded-3" alt={item.name} />
                        <span className="badge position-absolute top-0 end-0 m-2 bg-primary text-white">
                          <i className="ri-star-fill me-1"></i>
                          {item.rating} ({item.reviews})
                        </span>
                      </div>
                      <h6 className="fw-bold mb-1">{item.name}</h6>
                      <div className="text-light mb-2">
                        <i className="ri-map-pin-line me-1"></i>
                        {item.location}
                      </div>

                      <div className="d-flex flex-wrap gap-2 text-white mb-3 small">
                        <span className="badge bg-dark">{item.tag}</span>
                        <span>

                          <strong className="text-success">${item.price}</strong>
                        </span>
                      </div>

                      <div className="d-flex justify-content-between align-items-center mt-auto">
                        <span className="fw-semibold text-primary">
                          ${item.price} <small>/meal</small>
                        </span>
                        <button className="btn btn-outline-primary btn-sm btn-dark-theme"
                          onClick={() => handleBookTabel(item)}
                        >
                          Book Table
                        </button>
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

export default Restaurants