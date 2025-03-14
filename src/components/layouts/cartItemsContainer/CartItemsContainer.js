import React, { useContext, useState } from "react";
import "./cartItemsContainer.css";
import CartItemCard from "../../cards/cartItemCard/cartItemCard";
import { CartContext } from "../../../App";
import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from "react-router-dom";

// Modal component for success popup
const SuccessModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">
          <div className="success-icon">
            <span role="img" aria-label="success">✅</span>
          </div>
          <h2>Payment Successful!</h2>
          <p>Your payment has been processed successfully. Thank you for your purchase!</p>
          <button onClick={onClose} className="button-primary">OK</button>
        </div>
      </div>
    </div>
  );
};

const CartItemsContainer = () => {
  const { cartItems, totalAmount } = useContext(CartContext);
  const stripeKey = "pk_test_51NFw2VSAp6x3SV1O018qztSpRMlsy4ApDhEcigM9HaCU5iWTBEsOVnAKdmzABLgtClz8W0uPeP6YS6fVV1fxQLBh00JjbpE6Wf";
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  const onToken = (token) => {
    console.log(token);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    navigate("/");
  };

  return (
    <section className="cart-items-container">
      <div className="container">
        {totalAmount === 0 ? (
          <h2>Currently your Cart is Empty....</h2>
        ) : (
          <>
            <h2>Cart</h2>
            {cartItems.map((item) => (
              <CartItemCard key={item.id} bookData={item} />
            ))}
            <h2>The Total Amount = &#8377;{totalAmount}</h2>
            
            <StripeCheckout
              name="Book Checkout"
              description="Please fill in the details below"
              amount={totalAmount * 100}
              currency="INR"
              stripeKey={stripeKey}
              token={onToken}
              billingAddress
            >
              <button className="button-primary button-width">Proceed to Checkout</button>
            </StripeCheckout>
          </>
        )}
      </div>

      {/* Success Modal */}
      <SuccessModal show={showModal} onClose={handleModalClose} />
    </section>
  );
};

export default CartItemsContainer;
