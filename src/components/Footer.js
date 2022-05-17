import React from 'react'
import { Link } from "react-router-dom";
import {  FaTwitter, FaFacebookF, FaInstagram, FaPinterest, FaEnvelope , FaPhone, FaMapMarkerAlt, FaCcMastercard, FaCcVisa, FaRegCreditCard, FaCcPaypal ,FaCcDiscover, FaCcAmex} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='foot-container'>

		{/* <div id="newsletter" className="section">
			
			<div className="container">
				
				<div className="row">
					<div className="row">
						<div className="newsletter">
							<div className='row xxx'>
							<p>Sign Up for the <strong>NEWSLETTER</strong></p>
							<form>
								<input className="input" type="email" placeholder="Enter Your Email"/>
								<button className="newsletter-btn"><i className="fa "><FaEnvelope/></i> Subscribe</button>
							</form>
							<ul className="newsletter-follow">
								<li>
									<a href="https://www.linkedin.com/in/ekele-stephen-79426a19a/"><i className="fa "></i><FaFacebookF/></a>
								</li>
								<li>
									<a href="https://www.linkedin.com/in/ekele-stephen-79426a19a/"><i className="fa "><FaTwitter/></i></a>
								</li>
								<li>
									<a href="https://www.linkedin.com/in/ekele-stephen-79426a19a/"><i className="fa"></i><FaInstagram/></a>
								</li>
								<li>
									<a href="https://www.linkedin.com/in/ekele-stephen-79426a19a/"><i className="fa"></i><FaPinterest/></a>
								</li>
							</ul>
							</div>
						</div>
					</div>
				</div>
			
			</div>
		</div> */}

		<footer id="footer">
			<div className="section">
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-md-3 col-xs-6">
							<div className="footer">
								<h3 className="footer-title">About Us</h3>
								<p>We sale all kinds of quality wears like <br></br> shoes, pants, shirts, glasses etc</p>
								<ul className="footer-links">
									<li><Link to="/"><i className="fa"><FaMapMarkerAlt/></i>173 Ikeja city mall</Link></li>
									<li><Link to="/"><i className="fa"><FaPhone/></i> +234 8123 583 317</Link></li>
									<li><Link to="/"><i className="fa"><FaEnvelope/></i>jumoke1239@gmail.com</Link></li>
								</ul>
							</div>
						</div>

						<div className="col-lg-3 col-md-3 col-xs-6">
							<div className="footer">
								<h3 className="footer-title">Categories</h3>
								<ul className="footer-links">
									<li><Link to="/shop">Hot deals</Link></li>
									<li><Link to="/shop">Laptops</Link></li>
									<li><Link to="/shop">Smartphones</Link></li>
									<li><Link to="/shop">Cameras</Link></li>
									<li><Link to="/shop">Accessories</Link></li>
								</ul>
							</div>
						</div>

						<div className="clearfix visible-xs"></div>

						<div className=" col-lg-3 col-md-3 col-xs-6">
							<div className="footer">
								<h3 className="footer-title">Information</h3>
								<ul className="footer-links">
									<li><Link to="/shop">About Us</Link></li>
									<li><Link to="/shop">Contact Us</Link></li>
									<li><Link to="/shop">Privacy Policy</Link></li>
									<li><Link to="/shop">Orders and Returns</Link></li>
									<li><Link to="/shop">Terms & Conditions</Link></li>
								</ul>
							</div>
						</div>

						<div className="col-lg-3 col-md-3 col-xs-6">
							<div className="footer">
								<h3 className="footer-title">Service</h3>
								<ul className="footer-links">
									<li><Link to="/user-history">My Account</Link></li>
									<li><Link to="/cart">View Cart</Link></li>
									<li><Link to="/user-wishlist">Wishlist</Link></li>
									<li><Link to="/user-history">Track My Order</Link></li>
									<li><Link to="/">Help</Link></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div id="bottom-footer" className="section">
				<div className="container">
					<div className="rowxxx">
						<div className="col-md-12 text-center">
							<ul className="footer-payments">
								<li><Link to="/payment"><i className="fa"><FaCcVisa/></i></Link></li>
								<li><Link to="/payment"><i className="fa"><FaRegCreditCard/></i></Link></li>
								<li><Link to="/payment"><i className="fa"><FaCcPaypal/></i></Link></li>
								<li><Link to="/payment"><i className="fa"><FaCcMastercard></FaCcMastercard></i></Link></li>
								<li><Link to="/payment"><i className="fa"><FaCcDiscover/></i></Link></li>
								<li><Link to="/payment"><i className="fa"><FaCcAmex/></i></Link></li>
							</ul>
							<span className="copyright">
							All right reserved || powered by <a target="_blank" href="https://sekinc.netlify.app">Sek-in</a>
							</span>
						</div>
					</div>
						
				</div>
			</div>
		</footer>
        </div>
    )
}

export default Footer
