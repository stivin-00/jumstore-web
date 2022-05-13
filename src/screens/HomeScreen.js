import React, { useEffect, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Product from "../components/Product";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import Banner from "../components/Banner";
import { categoriesList } from "../utils/MockData";

export default function HomeScreen() {
  const [cat, setCat] = useState("");
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts({}));
  }, [dispatch]);

  useEffect(() => {
    console.log(products);
  });
  return (
    <div className="home">
      <div className="navigation">
        <ul className="row">
          {categoriesList.map((items, index) => (
            <Link
              key={index}
              onClick={() => setCat(items.label)}
              to={`/search/category/${items.label}`}
            >
              <li
                className={
                  items.label === cat ? "active-link nav-item" : "nav-item"
                }
              >
                {items.label}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="head-category" style={{width: "100vw" }}>
        {categoriesList.map((item, index) => (
          <Link
            className="header-cat-item"
            key={index}
            to={`/search/category/${item.label}`}
          >
            <img
              src={item.image}
              alt="logo"
              className="header-cat-img"
              style={{ height: "20px", width: "20px" }}
            />
            <p>{item.label}</p>
          </Link>
        ))}
      </div>
      <Hero />
      <Features />
      <div className="feature">
        <div className="feature-top">
          <h2>Featured Products</h2>
        </div>
        <div className="feature-bottom ">
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <>
              {products.length === 0 && (
                <MessageBox>No Product Found</MessageBox>
              )}
              <div>
                <Scrollbars
                  // style={{height: '265px'}}
                  className="product-overflow"
                  autoHide
                  autoHideTimeout={1000}
                  autoHideDuration={200}
                  // autoHeight
                  // autoHeightMin={0}
                  // autoHeightMax={400}
                  thumbMinSize={30}
                  universal={true}
                >
                  <div className="produts-row">
                    {products.map((product) => (
                      <Product key={product._id} product={product}></Product>
                    ))}
                  </div>
                </Scrollbars>
              </div>
            </>
          )}
        </div>
      </div>
      <Banner />
      <div className="feature">
        <div className="feature-top">
          <h2>Best Selling</h2>
        </div>
        <div className="feature-bottom ">
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <>
              {products.length === 0 && (
                <MessageBox>No Product Found</MessageBox>
              )}
              <div>
                <Scrollbars
                  // style={{height: '265px'}}
                  className="product-overflow"
                  autoHide
                  autoHideTimeout={1000}
                  autoHideDuration={200}
                  // autoHeight
                  // autoHeightMin={0}
                  // autoHeightMax={400}
                  thumbMinSize={30}
                  universal={true}
                >
                  <div className="produts-row">
                    {products.reverse().map((product) => (
                      <Product key={product._id} product={product}></Product>
                    ))}
                  </div>
                </Scrollbars>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="feature">
        <div className="feature-top">
          <h2>Fashion Style Guide</h2>
        </div>
        <div className="feature-bottom ">
          <img
            className="jumia-image"
            src="https://ng.jumia.is/cms/0-1-weekly-cps/0-2022/w20/Market-days/9-may/CB---Jewelries-Market-Day.jpg"
          />
        </div>
      </div>

      <div className="feature">
        <div className="feature-top">
          <h2>products</h2>
        </div>
        <div className="feature-bottom ">
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <>
              {products.length === 0 && (
                <MessageBox>No Product Found</MessageBox>
              )}
              <div>
                <div className="produts-all">
                  {products.reverse().map((product) => (
                    <Product key={product._id} product={product}></Product>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* <About /> */}
    </div>
  );
}
