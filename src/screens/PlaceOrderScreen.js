import React, { useEffect, useState } from "react";
import { PaystackButton } from "react-paystack";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createOrder } from "../actions/orderActions";
import CheckoutSteps from "../components/CheckoutSteps";
import { ORDER_CREATE_RESET } from "../constants/orderConstants";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

export default function PlaceOrderScreen(props) {
  const [deliveryPrice, setDeliveryPrice] = useState(200);
  const cart = useSelector((state) => state.cart);
  if (!cart.paymentMethod) {
    props.history.push("/payment");
  }
  const orderCreate = useSelector((state) => state.orderCreate);
  const userDetails = useSelector((state) => state.userSignin.userInfo);
  const { loading, success, error, order } = orderCreate;
  const toPrice = (num) => Number(num.toFixed(2)); // 5.123 => "5.12" => 5.12
  cart.itemsPrice = toPrice(
    cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  );
  cart.shippingPrice = cart.itemsPrice > 100 ? toPrice(0) : toPrice(10);
  cart.taxPrice = toPrice(0.05 * cart.itemsPrice);
  cart.totalPrice = cart.itemsPrice + deliveryPrice - cart.taxPrice;
  const totalAmount =
    (cart.itemsPrice + deliveryPrice - cart.taxPrice) * 100;
  const dispatch = useDispatch();
  

  const { State, LGA, Bustop, Street } = cart.shippingAddress;


  // shipping calculator

  const getDeliveryPrice = () => {
    if (State === 'Abia') {
      setDeliveryPrice(3500);
    } else {
      if (State === 'Lagos') {
        setDeliveryPrice(1500);
      } else {
        if (State === 'Oyo') {
          setDeliveryPrice(2000);
        } else {
          if (State === 'Rivers') {
            setDeliveryPrice(4000);
          } else {
            if (State === 'Ogun') {
              setDeliveryPrice(2000);
            } else {
              if (State === 'Osun') {
                setDeliveryPrice(3000);
              } else {
                if (State === 'Ondo') {
                  setDeliveryPrice(3000);
                } else {
                  if (State === 'Ekiti') {
                    setDeliveryPrice(3000);
                  } else {
                    if (State === 'Delta') {
                      setDeliveryPrice(2500);
                    } else {
                      if (State === 'Edo') {
                        setDeliveryPrice(2500);
                      } else {
                        if (State === 'Imo') {
                          setDeliveryPrice(3500);
                        } else {
                          if (State === 'Enugu') {
                            setDeliveryPrice(3500);
                          } else {
                            if (State === 'Anambra') {
                              setDeliveryPrice(3500);
                            } else {
                              if (State === 'Ebonyi') {
                                setDeliveryPrice(3500);
                              } else {
                                if (State === 'Akwa-Ibom') {
                                  setDeliveryPrice(4000);
                                } else {
                                  if (State === 'Cross-River') {
                                    setDeliveryPrice(4000);
                                  } else {
                                    if (State === 'Kogi') {
                                      setDeliveryPrice(4500);
                                    } else {
                                      if (
                                        State === 'Federal Capital Territory'
                                      ) {
                                        setDeliveryPrice(3000);
                                      } else {
                                        setDeliveryPrice(5000);
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  };



  // shpping calculator
  const placeOrderHandler = () => {
    try {
      let order = {
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        deliverytMethod: "Standard Delivery",
        itemsPrice: cart.itemsPrice,
        shippingPrice: deliveryPrice,
        taxPrice: cart.taxPrice,
        isPaid: false,
        totalPrice: totalAmount,
        userEmail: userDetails.email,
        userPhone: userDetails.phone,
        userName: cart.shippingAddress.FullName,
      };
      dispatch(createOrder(order));
      alert("success", "Your Order Placed Successfully");
    } catch (error) {
      alert("Oops !! Something went wrong !");
      console.log(error);
    }
  };
  const placePaidOrderHandler = () => {
    try {
      let order = {
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        deliverytMethod: "Standard Delivery",
        itemsPrice: cart.itemsPrice,
        shippingPrice: deliveryPrice,
        taxPrice: cart.taxPrice,
        isPaid: true,
        totalPrice: totalAmount,
        userEmail: userDetails.email,
        userPhone: userDetails.phone,
        userName: cart.shippingAddress.FullName,
      };
      dispatch(createOrder(order));
      alert("order placed successfully");
    } catch (error) {
      alert("Oops !! Something went wrong !");
      console.log(error);
    }
  };

  //check pay option
  const [payOption, setPayOption] = useState(false);
  const change = () => {
    if (cart.paymentMethod === "Pay Now") {
      setPayOption(true);
    } else {
      setPayOption(false);
    }
  };

  useEffect(() => {
    change();
    getDeliveryPrice();
    console.log("payment>>>>", cart.paymentMethod);
    console.log("uers>>>>>", userDetails);
    console.log("cart", cart);
    console.log(cart.cartItems);
    console.log(cart.itemsPrice);
    console.log("paymettode====>", cart.paymentMethod);
    // if ((cart.paymentMethod = "Pay Now")) {
    //   setPayOption(true);
    // } else {
    //   setPayOption(false);
    // }
    console.log(payOption);
  }, [cart.paymentMethod]);

  useEffect(() => {
    if (success) {
      props.history.push(`/order/${order._id}`);
      dispatch({ type: ORDER_CREATE_RESET });
    }
  }, [dispatch, order, props.history, success]);

  //paystack starts
  const config = {
    reference: new Date().getTime().toString(),
    email: "user@example.com",
    amount: totalAmount.toFixed(0),
    publicKey: "pk_live_265fed5585afd6975af072710503a8f9c385bef0",
  };
  const handlePaystackSuccessAction = (reference) => {
    placePaidOrderHandler();
    console.log(reference);
  };

  // you can call this function anything
  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const componentProps = {
    ...config,
    text: "Place order with card",
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };

  //paystack ends

  return (
    <div className="page-drop">
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      <div className="row top-order">
        <div className="coll">
          <ul>
            <li>
              <div className="card card-body">
                <h2>Shipping</h2>
                <p>
                  <strong>Name:</strong> {cart.shippingAddress.FullName} <br />
                  <strong>email:</strong> {userDetails.email} <br />
                  <strong>Address: </strong> {Street} street, {Bustop} bustop,{" "}
                  {LGA} lga, {State} state, Nigeria
                </p>
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h2>Payment</h2>
                <p>
                  Method: <strong> {cart.paymentMethod}</strong>
                </p>
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h2>Order Items</h2>
                <ul>
                  {cart.cartItems.map((item) => (
                    <li key={item.product}>
                      <hr></hr>
                      <div className="row order-items">
                        <div>
                          <img
                            src={item.image.url}
                            alt={item.name}
                            className="small"
                          ></img>
                        </div>
                        <div className="">
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </div>
                        <div>size: {item.size}</div>
                        <div>
                          {item.qty} x ₦{item.price} = ₦{item.qty * item.price}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="coll">
          <div className="card card-body">
            <ul>
              <li>
                <h2>Order Summary</h2>
              </li>
              <li>
                <div className="row">
                  <div>Items</div>
                  <div>₦{cart.itemsPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Shipping</div>
                  <div>₦{deliveryPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Discount</div>
                  <div>₦{cart.taxPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>
                    <strong> Order Total</strong>
                  </div>
                  <div>
                    <strong>₦{cart.totalPrice.toFixed(2)}</strong>
                  </div>
                </div>
              </li>
              <li>
                {payOption ? (
                  <PaystackButton
                    className="primary block"
                    {...componentProps}
                  />
                ) : (
                  <button
                    type="button"
                    onClick={placeOrderHandler}
                    className="primary block"
                    disabled={cart.cartItems.length === 0}
                  >
                    Place Order
                  </button>
                )}
              </li>
              {loading && <LoadingBox></LoadingBox>}
              {error && <MessageBox variant="danger">{error}</MessageBox>}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
