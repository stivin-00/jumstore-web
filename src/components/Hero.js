import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

const Hero = () => {
  const fadeImages = [
    {
      url: `https://res.cloudinary.com/dxjprordi/image/upload/v1650977478/gxlwlzftn237v4al2pqm.jpg`,
      caption: "Adidas Fit Pant",
      link: "61dda52fd6f9088025fec628",
    },
    {
      url: `https://res.cloudinary.com/dxjprordi/image/upload/v1650977453/dt4i7kkmhito4qagxb6c.jpg`,
      caption: "Paraga 2016",
      link: "625a6b47711a43a26196730f",
    },
    {
      url: `https://res.cloudinary.com/dxjprordi/image/upload/v1650977453/dt4i7kkmhito4qagxb6c.jpg`,
      caption: "Hott Drone 11",
      link: "6243ffdb8abf04a0900c5481",
    },
    {
      url: `https://res.cloudinary.com/dxjprordi/image/upload/v1650977428/s8kjrgkjxw3bskykozxy.jpg`,
      caption: "Hott Drone 11",
      link: "6243ffdb8abf04a0900c5481",
    },
  ];

  const fadeProperties = {
    duration: 3000,
    pauseOnHover: true,
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
            <Link to="/search/name" className="banner-li">
              <h2 className="banner-cat" style={{color: '#cbc3e3'}}>
                <Typewriter
                  options={{
                    strings: [" joggers", " joggers", " joggers"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h2>
              <img
                src="https://res.cloudinary.com/dxjprordi/image/upload/v1650979457/oetasimmfcbozfbjfd9f.jpg"
                alt="ii"
                className="banner-img"
              />
            </Link>
            <Link to="/search/name" className="banner-li">
              <h2 className="banner-cat" style={{color: '#cbc3e3'}}>
                <Typewriter
                  options={{
                    strings: [" shirts", " shirts", " shirts"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h2>
              <img
                src="https://res.cloudinary.com/dxjprordi/image/upload/v1650979411/v5nahyssg4xipanssfuk.jpg"
                alt="ii"
                className="banner-img"
              />
            </Link>
          </div>
          <div className="li-banner">
            <Link to="/search/name" className="banner-li">
              <h2 className="banner-cat" style={{color: '#cbc3e3'}}>
                <Typewriter
                  options={{
                    strings: [" caps", " caps", " caps"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h2>
              <img
                src="https://res.cloudinary.com/dxjprordi/image/upload/v1650979477/vg1jouuie230fdfldume.jpg"
                alt="ii"
                className="banner-img"
              />
            </Link>
            <Link to="/search/name" className="banner-li">
              <h2 className="banner-cat" style={{color: '#cbc3e3'}}>
                <Typewriter
                  options={{
                    strings: [" shorts", " shorts", " shorts"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h2>
              <img
                src="https://res.cloudinary.com/dxjprordi/image/upload/v1650977517/qzjmiglm539nra4xndsr.jpg"
                alt="ii"
                className="banner-img"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
