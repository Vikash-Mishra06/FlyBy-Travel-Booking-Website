import React from 'react'
import { useLocation } from 'react-router-dom'
import { pdf } from '@react-pdf/renderer'
import { saveAs } from 'file-saver'
import InvoiceDocument from './InvoiceDocument'
import { FormLabel } from 'react-bootstrap'

function BookingConfirmation() {
  const { state } = useLocation();

  const {
    date = 'Not specified',
    location = 'Unknown',
    adults = 0,
    children = 0,
    tourGuide = 0,
    dinner = 0,
    tax = 0,
    subTotal = 0,
    total = 0,
    transport = { title: '', cost: 0 },
    restaurant = { title: '', cost: 0 },
    hotel = { title: '', cost: 0 },
    showInvoiceButton = true,
  } = state || {};

  const handleDownloadInvoice = async () => {
    const blob = await pdf(
      <InvoiceDocument
        data={{
          date,
          location,
          adults,
          children,
          tourGuide,
          dinner,
          tax,
          subTotal,
          total,
          transport,
          restaurant,
          hotel,
        }} />
    ).toBlob();
    saveAs(blob, 'invoice.pdf');
  }

  return (
    <>
      <div className="bg-dark text-white py-5">
        <div className="container">
          <div className="row gx-5 align-items-start">
            <div className="col-lg-8 mb-4 mb-lg-0">
              <h3 className="text-warning mb-3">Booking Completed</h3>
              <p className="text-light mb-4" style={{ maxWidth: "600px" }}>
                Thank you for booking with <strong>FlyBY</strong>! Your trip to <strong>{location}</strong> is confirmed. Below is your booking summary.
              </p>

              <div className="bg-dark p-4 rounded shadow-sm">
                <h5 className="text-white mb-3">Booking Summary</h5>
                {[
                  ['Tour Place', location],
                  ['Date', date],
                  ['Adults', adults.toString().padStart(2, '0')],
                  ['Children', children.toString().padStart(2, '0')],
                  ['Tour Guide', `$${tourGuide.toFixed(2)}`],
                  ['Dinner', `$${dinner.toFixed(2)}`],
                  transport?.title && ['Transport', `${transport.title} - $${transport.cost.toFixed(2)}`],
                  restaurant?.title && ['Restaurant', `${restaurant.title} - $${restaurant.cost.toFixed(2)}`],
                  hotel?.title && ['Hotel', `${hotel.title} - $${hotel.cost.toFixed(2)}`],
                  ['VAT Tax', `$${tax.toFixed(2)}`],
                  ['Sub Total', `$${subTotal.toFixed(2)}`],
                ].filter(Boolean).map(([label, value]) => (
                  <div className="d-flex justify-content-between py-2 border-bottom border-light" key={FormLabel}>
                    <span>{label}</span>
                    <span>{value}</span>
                  </div>
                ))}

                <div className="d-flex justify-content-between py-3 border-top mt-3 fs-5">
                  <strong>Total</strong>
                  <strong>${total.toFixed(2)}</strong>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="bg-dark p-4 rounded shadow-sm text-white border border-secondary">
                <h5 className="mb-3">Get your Invoice</h5>
                <p className="small text-light">
                  Click the button below to generate a PDF invoice with all booking details. You can download PDF.
                </p>

                <ul className="list-unstyled small text-light mt-3 mb-4">
                  <li><i className="ri-phone-line me-2 text-primary"></i>+918855447755</li>
                  <li><i className="ri-mail-line me-2 text-primary"></i>example@gmail.com</li>
                </ul>

                {showInvoiceButton && (
                  <button
                    className='btn btn-warning w-100'
                    onClick={handleDownloadInvoice}
                  >
                    View your Invoice
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BookingConfirmation