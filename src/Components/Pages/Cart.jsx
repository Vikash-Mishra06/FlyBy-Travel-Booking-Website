import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CheckOutPage from "./ConfirmYourBooking";
import { CartContext } from "../../Context/CartContext";


const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const [showCheckout, setShowCheckout] = useState(false);
  const [bookingDate, setBookingDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  // Calculate totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + (parseFloat(item.price) || 0) * (item.quantity || 1),
    0
  );
  const vat = subtotal * 0.05;
  const grandTotal = subtotal + vat;

  if (showCheckout) {
    return <CheckOutPage cartItems={cartItems} bookingDate={bookingDate} />;
  }

  return (
    <div className="cartpage-wrapper">
      <div className="container cartpage-container">
        <div className="cartpage-header my-4">
          <h2 className="cartpage-title">Tour Cart Summary</h2>
          <p className="cartpage-breadcrumb">Home → Your Cart</p>
          <div className="cartpage-steps d-flex justify-content-center gap-2">
            <span className="step step-active">1</span>
            <span className="step">2</span>
            <span className="step">3</span>
            <span className="step">4</span>
          </div>
        </div>

        <div className="row cartpage-content">
          <div className="col-md-8 cartpage-cart">
            <h4>Your Cart Details</h4>

            {cartItems.length === 0 ? (
              <div className="cart-empty text-center p-4 bg-dark text-light rounded">
                <i className="ri-shopping-cart-2-line fs-1"></i>
                <h5>Your Cart is currently empty</h5>
                <p>Looks like you haven't added any bookings yet.</p>
                <div className="d-flex justify-content-center gap-2">
                  <Link to="/hotels" className="btn btn-outline-warning">
                    Book Hotels
                  </Link>
                  <Link to="/transport" className="btn btn-outline-primary">
                    Book Transport
                  </Link>
                  <Link to="/restaurants" className="btn btn-outline-success">
                    Find Restaurants
                  </Link>
                </div>
              </div>
            ) : (
              <div className="table-responsive">
                <table className="table table-dark table-hover cart-table">
                  <thead className="table-light">
                    <tr>
                      <th>Package</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id}>
                        <td className="d-flex align-items-center gap-3">
                          <img
                            src={item.image}
                            alt={item.title}
                            width="80"
                            className="rounded"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = "/default-hotel.jpg";
                            }}
                          />
                          <div>
                            <strong>{item.title}</strong>
                            <br />
                            <small>
                              {item.persons} person{item.persons > 1 ? "s" : ""}
                            </small>
                            <br />
                            <small className="text-capitalize">{item.type}</small>
                          </div>
                        </td>
                        <td>{item.quantity || 1}</td>
                        <td>
                          $
                          {(
                            (parseFloat(item.price) || 0) *
                            (item.quantity || 1)
                          ).toFixed(2)}
                        </td>
                        <td>
                          <i
                            className="ri-delete-bin-line text-danger fs-5"
                            role="button"
                            title="Remove item"
                            onClick={() => removeFromCart(item.id)}
                          ></i>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          <div className="col-md-4 mt-4 mt-md-0">
            <div className="p-3 bg-dark text-light rounded">
              <h5>
                Total{" "}
                <span className="float-end text-success">
                  ${subtotal.toFixed(2)}
                </span>
              </h5>

              <p className="fw-bold mt-3">Select Travel Date</p>
              <input
                type="date"
                value={bookingDate}
                onChange={(e) => setBookingDate(e.target.value)}
                min={bookingDate}
                className="form-control mb-3"
              />

              <p>
                <i className="ri-map-pin-line me-2 text-warning"></i>
                Destination Selected
              </p>

              <div className="border-top pt-2 mt-2">
                <p>
                  Sub Total
                  <span className="float-end">${subtotal.toFixed(2)}</span>
                </p>
                <p>
                  VAT (5%)
                  <span className="float-end">${vat.toFixed(2)}</span>
                </p>
                <hr />
                <h6>
                  Grand Total
                  <span className="float-end">${grandTotal.toFixed(2)}</span>
                </h6>
              </div>

              <button
                className="btn next-btn w-100 fw-bold mt-3"
                disabled={cartItems.length === 0}
                onClick={() => setShowCheckout(true)}
              >
                Continue & Next
              </button>

              <div className="mt-3 small">
                <i className="ri-check-double-line text-success me-1"></i>
                Free Cancellation up to 24h in Advance
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
