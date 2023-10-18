import React from "react";
import "./Subtotal.css";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useNavigate } from "react-router-dom";

function Subtotal() {
  const navigate =  useNavigate();
  const [{ basket }, dispatch] = useStateValue();

  // Function to format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket.length} items):{" "}
        <strong>{formatCurrency(getBasketTotal(basket))}</strong>
      </p>
      <small className="subtotal_gift">
        <input type="checkbox" /> This order contains a gift
      </small>
      <button className="subtotal_button" onClick={() => navigate("/billingaddress")}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;

