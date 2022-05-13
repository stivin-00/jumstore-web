import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from "../actions/cartActions";
import About from "../components/About";
import CheckoutSteps from "../components/CheckoutSteps";

export default function PaymentMethodScreen(props) {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  // if (!shippingAddress.address) {
  //   props.history.push("/shipping");
  // }
  const [paymentMethod, setPaymentMethod] = useState("");
  
  useEffect(() => {
    console.log(paymentMethod);
  }, [paymentMethod]);

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    props.history.push("/placeorder");
  };
  return (
    <div className="page-drop">
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <form
        className="form card"
        onSubmit={submitHandler}
        style={{ paddingBottom: "10px" }}
      >
        <div>
          <h1>Payment Method</h1>
        </div>
        <div>
          <div>
            <input
              type="radio"
              id="Pay Now"
              value="Pay Now"
              name="paymentMethod"
              required
              // checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label htmlFor="">Pay Now</label>
          </div>
        </div>
        <div>
          <div>
            <input
              type="radio"
              id="stripe"
              value="Pay On Delivery"
              name="paymentMethod"
              required
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label htmlFor="">Pay On Delivery</label>
          </div>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Continue
          </button>
        </div>
      </form>
      <About />
    </div>
  );
}
