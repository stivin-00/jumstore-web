import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { signout } from './actions/userActions';
import AdminRoute from './components/AdminRoute';
import PrivateRoute from './components/PrivateRoute';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import OrderScreen from './screens/OrderScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductScreen from './screens/ProductScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SigninScreen from './screens/SigninScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import SearchBox from './components/SearchBox';
import ChatBox from './components/ChatBox';
import SearchScreen from './screens/SearchScreen';
import { listProductCategories } from './actions/productActions';
import LoadingBox from './components/LoadingBox';
import MessageBox from './components/MessageBox';
import Footer from './components/Footer';
import './style.css';
import MapScreen from './screens/MapScreen';
import SearchBoxs from './components/SearchBoxs';
import DashboardScreen from './screens/DashboardScreen';
import ErrorScreen from './screens/ErrorScreen';
import SupportScreen from './screens/SupportScreen';

function App() {
  const cart = useSelector((state) => state.cart);
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [menubarIsOpen, setMenubarIsOpen] = useState(false);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList;
  useEffect(() => {
    dispatch(listProductCategories());
  }, [dispatch]);
  return (
    <BrowserRouter>
     
      <div className="grid-container" style={{width: '10vw'}}>
        <header className="row">
          <div>
            <button
              type="button"
              className="open-sidebar"
              onClick={() => setSidebarIsOpen(true)}
            >
              <i className="fa fa-bars" ></i>
            </button>
            <Link className="brand" to="/">
              jumstore
            </Link>
          </div>
          <div className="mini-close">
            <Route
              render={({ history }) => (
                <SearchBox history={history}></SearchBox>
              )}
            ></Route>
          </div>
          <div className="mini-close">
            <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/profile">User Profile</Link>
                  </li>
                  <li>
                    <Link to="/orderhistory">Order History</Link>
                  </li>
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}

            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/productlist">Products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist">Orders</Link>
                  </li>
                  <li>
                    <Link to="/userlist">Users</Link>
                  </li>
                  <li>
                    <Link to="/support">support</Link>
                  </li>
                </ul>
                
              </div>
            )}
          </div>
          <button
              type="button"
              className="open-sidebar max-close"
              onClick={() => setMenubarIsOpen(!menubarIsOpen)}
            >
              <i className="fa fa-bars" ></i>
            </button>
        </header>
        <aside className={sidebarIsOpen ? 'open' : ''}>
          <ul className="categories">
            <li>
              <strong>Categories</strong>
              <button
                onClick={() => setSidebarIsOpen(false)}
                className="close-sidebar"
                type="button"
              >
                <i className="fa fa-close"></i>
              </button>
            </li>
            {loadingCategories ? (
              <LoadingBox></LoadingBox>
            ) : errorCategories ? (
              <MessageBox variant="danger">{errorCategories}</MessageBox>
            ) : (
              categories.map((c) => (
                <li key={c}>
                  <Link
                    to={`/search/category/${c}`}
                    onClick={() => setSidebarIsOpen(false)}
                  >
                    {c}
                  </Link>
                </li>
              ))
            )}
          </ul>
        </aside>
         <aside className={menubarIsOpen ? 'open' : ''} onClick={() => setMenubarIsOpen(false)}>
          <ul className="categories">
            <li>
              <strong>menu</strong>
              <button
                onClick={() => setMenubarIsOpen(false)}
                className="close-sidebar"
                type="button"
              >
                <i className="fa fa-close"></i>
              </button>
            </li>
            <li>
            <div onClick={() => setMenubarIsOpen(false)}>
            <Route
              render={({ history }) => (
                <SearchBoxs history={history}></SearchBoxs>
              )}
            ></Route>
          </div>
            </li>
            <li>
              <div onClick={() => setMenubarIsOpen(false)}>
              <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
              </div>
            </li>
            <li>
              <div onClick={() => setMenubarIsOpen(false)}>
              {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <ul className="dropdown-contentx" onClick={() => setMenubarIsOpen(false)}>
                  <li>
                    <Link to="/profile">User Profile</Link>
                  </li>
                  <li>
                    <Link to="/orderhistory">Order History</Link>
                  </li>
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
              </div>
            </li>
            <li>
              <div onClick={() => setMenubarIsOpen(false)}>
 
              </div>
            </li>
            <li>
              <div onClick={() => setMenubarIsOpen(false)}>
              {userInfo && userInfo.isAdmin && (
              <div className="dropdown" >
                <Link to="#admin">
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-contentx" onClick={() => setMenubarIsOpen(false)}>
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/productlist">Products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist">Orders</Link>
                  </li>
                  <li>
                    <Link to="/userlist">Users</Link>
                  </li>
                  <li>
                    <Link to="/support">support</Link>
                  </li>
                </ul>
                
              </div>
            )}
              </div>
            </li>

          </ul>
        </aside>
        <main>
        <Switch>
          <Route path="/cart/:id?"exact component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen} exact></Route>
          <Route
            path="/product/:id/edit"
           component={ProductEditScreen}
            exact
          ></Route>
          <Route path="/signin"exact component={SigninScreen}></Route>
          <Route path="/register"exact component={RegisterScreen}></Route>
          <Route path="/shipping"exact component={ShippingAddressScreen}></Route>
          <Route path="/payment"exact component={PaymentMethodScreen}></Route>
          <Route path="/placeorder"exact component={PlaceOrderScreen}></Route>
          <Route path="/order/:id"exact component={OrderScreen}></Route>
          <Route path="/orderhistory"exact component={OrderHistoryScreen}></Route>
          <Route
            path="/search/name/:name?"
            component={SearchScreen}
            exact
          ></Route>
          <Route
            path="/search/category/:category"
             component={SearchScreen}
            exact
          ></Route>
          <Route
            path="/search/category/:category/name/:name"
            component={SearchScreen}
            exact
          ></Route>
          <Route
            path="/search/category/:category/name/:name/min/:min/max/:max/rating/:rating/order/:order/pageNumber/:pageNumber"
            component={SearchScreen}
            exact
          ></Route>
          <PrivateRoute
            path="/profile"
           exact component={ProfileScreen}
          ></PrivateRoute>
          <PrivateRoute
            path="/map"
           exact component={MapScreen}
          ></PrivateRoute>
          <AdminRoute
            path="/productlist"
            component={ProductListScreen}
            exact
          ></AdminRoute>
          <AdminRoute
            path="/orderlist"
             component={OrderListScreen}
            exact
          ></AdminRoute>
          <AdminRoute
            path="/dashboard"
           exact component={DashboardScreen}
          ></AdminRoute>
          <AdminRoute
            path="/support"
           exact component={SupportScreen}
          ></AdminRoute>
          <AdminRoute path="/userlist"exact component={UserListScreen}
          ></AdminRoute>
          <AdminRoute
            path="/user/:id/edit"
           exact component={UserEditScreen}
          ></AdminRoute>
        

<Route path="/" component={HomeScreen} exact={true}></Route>
          <Route path='*' component={ErrorScreen} exact={true}></Route>
          </Switch>
        </main>
        {/* <footer className="row center">All right reserved</footer> */}
        <div>
          {userInfo && !userInfo.isAdmin && <ChatBox userInfo={userInfo} />}   
        </div>
        <Footer></Footer>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
