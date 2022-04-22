import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Link } from "react-router-dom";
import bann1 from "../utils/images/gocerys.png";
import bann2 from "../utils/images/jaconda-41.png";

const Hero = () => {
  const fadeImages = [
    {
      url: `https://res.cloudinary.com/dxjprordi/image/upload/v1649844598/sc5imxqzxpnfcwwqpd8j.jpg`,
      caption: "Adidas Fit Pant",
      link: "61dda52fd6f9088025fec628",
    },
    {
      url: `https://res.cloudinary.com/dxjprordi/image/upload/v1650092920/jeptmrvprmcebnr9qhk2.jpg`,
      caption: "Paraga 2016",
      link: "625a6b47711a43a26196730f",
    },
    {
      url: `https://res.cloudinary.com/dxjprordi/image/upload/v1649840520/cpakvlugvsfzstugxzaz.jpg`,
      caption: "Hott Drone 11",
      link: "6243ffdb8abf04a0900c5481",
    },
  ];

  const fadeProperties = {
    duration: 3000,
    pauseOnHover: true,
    indicators: true,
  };

  return (
    <div>
      <div className="slider-with-banner">
        <div className="slider">
          <div className="slider-area">
            <div className="slider-active ">
              <Fade {...fadeProperties}>
                {fadeImages.map((fadeImage, index) => (
                  <div
                    className="each-fade single-slide align-center-left bg-1"
                    style={{
                      backgroundImage: `url(${fadeImage.url})`,
                    }}
                  >

                    <div className="slider-content">
                      <h4>
                        Sale Offer <span>-20% Off</span> This Week
                      </h4>
                      <h1>{fadeImage.caption}</h1>
                      <h2>
                        Starting at <span>₦1209.00</span>
                      </h2>
                      <div className="default-btn">
                        <Link
                          className="banner-btn"
                          to={`/product/${fadeImage.link}`}
                        >
                          Shop Now
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </Fade>
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="li-banner">
            <Link to="/search/name">
              <img src={bann1} alt="ii" className="banner-img" />
            </Link>
          </div>
          <div className="li-banner">
            <Link to="/search/name">
              <img src={bann2} alt="ii" className="banner-img"/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
