// PaymentPage.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PaymentPage() {
    const [step, setStep] = useState(1);
    const [cartItems, setCartItems] = useState([]);
    const [checkInDate, setCheckInDate] = useState("2025-02-25");
    const [checkOutDate, setCheckOutDate] = useState("2025-02-28");
    const navigate = useNavigate();

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(storedCart);
    }, []);

    const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => total + item.price, 0);
    };

    const calculateTax = (subtotal) => subtotal * 0.05;
    const calculateTotal = () => {
        const subtotal = calculateSubtotal();
        return subtotal + calculateTax(subtotal);
    };

    const handleCheckoutContinue = () => {
        setStep(2);
    };

    const handlePayment = () => {
        const bookingInfo = {
            date: `${checkInDate} to ${checkOutDate}`,
            location: "Bangkok, Thailand",
            adults: 2,
            children: 1,
            tourGuide: 100,
            dinner: 50,
            tax: parseFloat(calculateTax(calculateSubtotal()).toFixed(2)),
            subTotal: parseFloat(calculateSubtotal().toFixed(2)),
            total: parseFloat(calculateTotal().toFixed(2)),
            transport: { title: 'Airport Pickup', cost: 30 },
            restaurant: { title: 'Thai Spice', cost: 40 },
            hotel: { title: 'Hilton Bangkok', cost: 300 },
            showInvoiceButton: true,
        };

        navigate('/booking-confirmation', { state: bookingInfo });
    };

    return (
        <div className="checkout-wrapper bg-dark text-white p-5">
            <div className="container">
                {step === 1 && (
                    <>
                        {/* Step 1: Personal & Booking Summary */}
                        <div className="text-center mb-5">
                            <h2 className="fw-bold text-white">Confirm Your Booking</h2>
                            <p className="text-white">Home ➔ Cart ➔ Checkout</p>
                            <div className="d-flex justify-content-center gap-2 steps">
                                <span className="step completed">1</span>
                                <span className="step completed">2</span>
                                <span className="step current">3</span>
                                <span className="step">&#10003;</span>
                            </div>
                        </div>

                        <div className="row g-4">
                            <div className="col-lg-8">
                                <div className="p-4 rounded shadow bg-section-light">
                                    <h5 className="text-warning mb-4">Personal Details</h5>
                                    <div className="row g-3">
                                        <div className="col-md-6"><input type="text" className='form-control dark-input' placeholder='Full Name' /></div>
                                        <div className="col-md-6"><input type="email" className='form-control dark-input' placeholder='Your Email' /></div>
                                        <div className="col-md-6"><input type="tel" className='form-control dark-input' placeholder='Phone Number' /></div>
                                        <div className="col-md-6"><input type="text" className='form-control dark-input' placeholder='Country' /></div>
                                        <div className="col-md-6"><input type="text" className='form-control dark-input' placeholder='City' /></div>
                                        <div className="col-md-6"><input type="text" className='form-control dark-input' placeholder='State' /></div>
                                        <div className="col-md-6"><input type="text" className='form-control dark-input' placeholder='Zip Code' /></div>
                                        <div className="col-12"><textarea className='form-control dark-input' rows="3" placeholder='Additional Note (Optional)' ></textarea></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="p-4 rounded shadow-sm bg-section-light">
                                    <h5 className="text-white d-flex justify-content-between mb-4">Booking Summary</h5>

                                    <div className="mb-5">
                                        <label className="form-label text-white">Check-In</label>
                                        <input type="date" value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)} className='form-control dark-input' />
                                    </div>

                                    <div className="mb-5">
                                        <label className="form-label text-white">Check-Out</label>
                                        <input type="date" value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)} className='form-control dark-input' />
                                    </div>

                                    <p className="mb-3 text-light"><i className="ri-map-pin-line text-warning me-2"></i>Destination: Bangkok, Thailand</p>

                                    <div className="p-3 bg-dark rounded mb-3 border border-secondary text-white">
                                        <p>Sub Total <span className='float-end'>${calculateSubtotal().toFixed(2)}</span></p>
                                        <p>Vat (5%) <span className='float-end'>${calculateTax(calculateSubtotal()).toFixed(2)}</span></p>
                                        <hr className="border-secondary" />
                                        <p className="fw-bold fs-5">Total <span className='float-end text-warning'>${calculateTotal().toFixed(2)}</span></p>
                                    </div>

                                    <button type='button' className='btn next-btn w-100 fw-bold' onClick={handleCheckoutContinue}>Continue & Next</button>

                                    <div className="text-white text-center small mt-3">
                                        <i className="ri-checkbox-circle-line text-success me-1"></i>
                                        Free Cancellation <br />
                                        <small>Up to 24h in advance</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {step === 2 && (
                    <div className="text-center">
                        <h2 className="fw-bold text-white mb-4">Payment Details</h2>
                        <p className="text-white">Home ➔ Cart ➔ Checkout ➔ Payment</p>
                        <div className="d-flex justify-content-center gap-2 steps mb-4">
                            <span className="step completed">1</span>
                            <span className="step completed">2</span>
                            <span className="step completed">3</span>
                            <span className="step current">4</span>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <div className="p-4 rounded shadow-sm bg-section-light">
                                    <h5 className="text-warning mb-4">Card Information</h5>
                                    <div className="mb-3"><input type="text" className="form-control dark-input" placeholder="Card Holder Name" /></div>
                                    <div className="mb-3"><input type="text" className="form-control dark-input" placeholder="Card Number" /></div>
                                    <div className="row g-3">
                                        <div className="col-md-6"><input type="text" className="form-control dark-input" placeholder="Expiry Date (MM/YY)" /></div>
                                        <div className="col-md-6"><input type="text" className="form-control dark-input" placeholder="CVV" /></div>
                                    </div>
                                    <div className="mt-4 text-center">
                                        <button className="btn next-btn w-100 fw-bold" onClick={handlePayment}>
                                            Pay ${calculateTotal().toFixed(2)}
                                        </button>
                                    </div>
                                    <div className="text-white text-center small mt-3">
                                        <i className="ri-secure-payment-line text-success me-1"></i>
                                        Your payment is secure
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default PaymentPage;
