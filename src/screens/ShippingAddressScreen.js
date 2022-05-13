import React, { useState } from "react";
import NaijaStates from "naija-state-local-government";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../actions/cartActions";
import About from "../components/About";
import CheckoutSteps from "../components/CheckoutSteps";

export default function ShippingAddressScreen(props) {
  const userSignin = useSelector((state) => state.userSignin);

  const { userInfo } = userSignin;
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const [lat, setLat] = useState(shippingAddress.lat);
  const [lng, setLng] = useState(shippingAddress.lng);
  const userAddressMap = useSelector((state) => state.userAddressMap);
  const { address: addressMap } = userAddressMap;

  if (!userInfo) {
    props.history.push("/signin");
  }
  const [state, setState] = useState("Lagos");
  const [lga, setLga] = useState("");
  const [bustop, setBustop] = useState("");
  const [street, setStreet] = useState("");
  const [fullName, setFullName] = useState(shippingAddress.fullName);
  // const [address, setAddress] = useState(shippingAddress.address);
  // const [city, setCity] = useState(shippingAddress.city);
  // const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  // const [country, setCountry] = useState(shippingAddress.country);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("address submitHandler");
    if (!state || !lga || !bustop || !street || !fullName) {
      alert("error", "please fill address completely");
    } else {
      let data = {
        FullName: fullName,
        State: state,
        LGA: lga,
        Bustop: bustop,
        Street: street,
      };
      dispatch(saveShippingAddress(data));
      console.log(data);

      props.history.push("/payment");
    }
  };

  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Shipping Address</h1>
        </div>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            placeholder="Enter full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="address">State</label>
          <select
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          >
            {NaijaStates.states().map((x, index) => (
              <option key={index} value={x}>
                {x}
              </option>
            ))}
          </select>
          {/* <input
            type="text"
            id="state"
            placeholder="Enter state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          ></input> */}
        </div>
        <div>
          <label htmlFor="city">Lga</label>
          <select
            value={lga}
            onChange={(e) => setLga(e.target.value)}
            required
          >
            {NaijaStates.lgas(state).lgas.map((x, index) => (
              <option key={index} value={x}>
                {x}
              </option>
            ))}
          </select>
          {/* <input
            type="text"
            id="lga"
            placeholder="Enter lga"
            value={lga}
            onChange={(e) => setLga(e.target.value)}
            required
          ></input> */}
        </div>
        <div>
          <label htmlFor="postalCode">Bustop</label>
          <input
            type="text"
            id="bustop"
            placeholder="Enter bustop"
            value={bustop}
            onChange={(e) => setBustop(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="country">Street</label>
          <input
            type="text"
            id="street"
            placeholder="Enter street"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            required
          ></input>
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
