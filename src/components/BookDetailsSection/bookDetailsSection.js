import React, { useState, useEffect, useContext } from "react";
import "./bookDetailsSection.css";

import { useParams, useNavigate  } from "react-router-dom";
import { BookData } from "../../Util/BookData";
import { CartContext, UserContext } from "../../App";


// Popup Component for Success Message
const SuccessPopup = ({ message, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <div className="popup-content">
          <span className="popup-close" onClick={onClose}>X</span>
          <div className="popup-checkmark">&#10003;</div>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

const BookDetailsSection = () => {
  const { id } = useParams();
  const [bookData, setBookData] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const user = useContext(UserContext);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    const newData = BookData.filter((book) => book.id === parseInt(id));
    setBookData(newData[0]);
  }, [id]);

  const handleAddToCart = () => {
    if (user) {
      addToCart(bookData); // Use addToCart function instead of setCartItems
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    } else {
      navigate("/login");
      alert("Please Login or SignUp first...!");
    }
  };

  return (
    <section className="detail-section-container">
      <div className="container">
        <div className="flex-container">
          <div className="book-img-container">
            <img src={bookData.book_url} alt="book" />
          </div>
          <div className="book-detail-container">
            <h2>{bookData.book_name}</h2>
            <p className="text-primary">{bookData.author_name}</p>
            <p className="book-description">{bookData.book_description}</p>
            <p><b>Language:</b> {bookData.language}</p>
            <p><b>Book Length: </b>{bookData.print_length}</p>
            <h3>&#8377;{bookData.price}</h3>

            <button onClick={handleAddToCart} className="cart-button">Add To Cart</button>
          </div>
        </div>
      </div>

      {/* Popup for Success Message */}
      {showPopup && <SuccessPopup message={`The Book "${bookData.book_name}" is added to the Cart`} onClose={() => setShowPopup(false)} />}
    </section>
  );
};

export default BookDetailsSection;
